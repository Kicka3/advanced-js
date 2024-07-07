import "./dialogs.scss";
import {useSelector} from "react-redux";
import React, {useEffect, useRef} from "react";
import {DialogPreview} from "../dialog-preview/dialog-preview";
import {UiTag} from "../ui/ui-tag/ui-tag";
import {UiScroll} from "../ui/ui-scroll/ui-scroll";
import {Selector} from "../../utils/selector";
import {Guard, numToStr} from "../../utils/common";
import {DIALOG_STATUS, TDialogActive, TDialogMessagesActive, TDialogPreview} from "../../types/common";
import {DialogsActions} from "../../actions/dialogs";
import {CommonActions} from "../../actions/common";
import {DialogActions} from "../../actions/dialog";
import {UserActions} from "../../actions/user";
import {useDialogsTypeChange} from "../../hooks/common";

type TDialogsProps = {
   className?: string;
};

export const Dialogs = React.memo((props: TDialogsProps) => {
   const activeDialogs = useSelector(Selector.getActiveDialogs);
   const closedDialogs = useSelector(Selector.getClosedDialogs);
   const chosenUser = useSelector(Selector.getChosenUser);
   const openedDialogId = useSelector(Selector.getOpenedDialogId);
   const isActiveDialogChosen = useSelector(Selector.getChosenDialogsType) === DIALOG_STATUS.ACTIVE;
   const closedDialogsScrollId = "closed-dialogs-scroll";
   const isPreviewsBig = !Guard.canUserChangeAccount();
   const activeCounter = useSelector(Selector.getActiveDialogCounter);
   const closeCounter = useSelector(Selector.getClosedDialogCounter);
   // Хук для переключения типа диалогов
   const onDialogsTypeChange = useDialogsTypeChange();

   // Вычисление количества новых сообщений
   const newMessagesCount = React.useMemo(() => {
      return activeDialogs.results.reduce((newMessagesCount: number, curDialogData: TDialogPreview<TDialogActive, TDialogMessagesActive>) => newMessagesCount + curDialogData.messagesData.newMessagesCount, 0);
   }, [activeDialogs]);

   // Обновление заголовка страницы в зависимости от количества новых сообщений
   useEffect(() => {
      if (newMessagesCount) {
         document.title = `${newMessagesCount} ${numToStr(newMessagesCount, ["новое", "новых", "новых"])} ${numToStr(newMessagesCount, ["сообщение", "сообщения", "сообщений"])}`;
      } else {
         document.title = "Жилфонд";
      }
   }, [newMessagesCount]);

   // Функция для открытия диалога
   const openDialog = React.useCallback(async (dialogId: string | number) => {
      CommonActions.setLoaderState(true);

      typeof dialogId === "string" ? await DialogActions.openActive(dialogId) : await DialogActions.openClosed(dialogId);
      await UserActions.getContact(null);
      CommonActions.setLoaderState(false);
   }, []);

   console.log("activeDialogs: ", activeDialogs.results);

   // Создание списка превью активных диалогов
   const activeDialogsPreviews = React.useMemo(() => {
      return activeDialogs.results.map((dialogData: any) => {
         let dataToRender;
         //Заменяю данные для отображения автора!!!
         if (dialogData.dialog.userId !== chosenUser.id) {
            dataToRender = {
               ...dialogData,
               dialog: {
                  ...dialogData.dialog,
                  firstName: dialogData.authorData.name,
                  lastName: dialogData.authorData.surname,
                  photo: dialogData.authorData.photo,
                  email: dialogData.authorData.email,
               },
            };
         } else {
            dataToRender = dialogData;
         }
         const isClosed = dataToRender.status === DIALOG_STATUS.CLOSE;
         return <DialogPreview
            key={dialogData.dialog.id}
            className="dialogs__preview"
            active={openedDialogId === dialogData.dialog.id}
            onClick={openDialog}
            data={dataToRender}
            currentUserId={chosenUser.id}
            isClosed={isClosed}
         />;
      });
   }, [activeDialogs, chosenUser, openedDialogId]);

   // Создание списка превью закрытых диалогов
   const closedDialogsPreviews = React.useMemo(() => {
      return closedDialogs.results.map((dialogData: any) => {
         return <DialogPreview
            key={`${dialogData.dialog.id}-${chosenUser.id}`}
            className="dialogs__preview"
            active={openedDialogId === dialogData.dialog.id}
            onClick={openDialog}
            data={dialogData}
            currentUserId={chosenUser.id}
         />;
      });
   }, [closedDialogs, chosenUser, openedDialogId]);

   // Скролл к последнему просмотренному диалогу в закрытых диалогах
   useEffect(() => {
      const scroll = document.querySelector(`#${closedDialogsScrollId}`);
      scroll?.querySelector(`.dialog-preview:nth-child(${closedDialogs.pagination.offset})`)?.scrollIntoView({
         behavior: "smooth"
      });
   }, [closedDialogs]);

   // Загрузка количества диалогов при монтировании компонента по id менеджера
   useEffect(() => {
      const loadDialogs = async () => {
         try {
            await DialogsActions.getCounterOfDialogs(chosenUser.id);
         } catch (err) {
            console.error(err);
         }
      };
      loadDialogs();
   }, [closedDialogs, activeDialogs]);

   // Ссылка на контейнер диалогов для автоскролла
   const dialogsContainerRef = useRef<HTMLDivElement>(null);

   // Автоскролл к активному диалогу
   useEffect(() => {
      if (isActiveDialogChosen && openedDialogId) {
         const activeElement = dialogsContainerRef.current?.querySelector(".dialog-preview--active");
         if (activeElement) {
            activeElement.scrollIntoView({behavior: "smooth", block: "center"});
         }
      }
   }, [openedDialogId, isActiveDialogChosen]);

   return (
      <div ref={dialogsContainerRef} className={`${props.className || ""} dialogs ${isPreviewsBig ? "dialogs--big" : ""}`}>
         <div className="dialogs__tabs">
            <div className="dialogs__tabs-col">
               <UiTag
                  className="dialogs__tab"
                  name={DIALOG_STATUS.ACTIVE}
                  checked={isActiveDialogChosen}
                  onChange={onDialogsTypeChange}>
                  Активные ({activeCounter})
               </UiTag>
            </div>
            <div className="dialogs__tabs-col">
               <UiTag
                  className="dialogs__tab"
                  name={DIALOG_STATUS.CLOSE}
                  checked={!isActiveDialogChosen}
                  onChange={onDialogsTypeChange}>
                  Завершенные ({closeCounter})
               </UiTag>
            </div>
         </div>
         {isActiveDialogChosen ?
            <UiScroll
               className="dialogs__previews"
               small={true}>
               {activeDialogsPreviews}
            </UiScroll> :
            <UiScroll
               className="dialogs__previews"
               id={closedDialogsScrollId}
               small={true}>
               {closedDialogsPreviews}
            </UiScroll>
         }
         {!isActiveDialogChosen && closedDialogs.results.length > 0 && <div className="dialogs__footer">
            <div className="dialogs__footer-row">
               <div className="dialogs__footer-col dialogs__footer-col--center">
                  <div className="dialogs__text">
                     {closedDialogs.results.length}
                     {numToStr(closedDialogs.results.length, ["диалог", "диалога", "диалогов"])}
                  </div>
               </div>
               {closedDialogs.pagination.count > closedDialogs.results.length &&
                  <div className="dialogs__footer-col dialogs__footer-col--center">
                     <div className="dialogs__text dialogs__text--link" onClick={DialogsActions.loadMoreClosedDialogs}>
                        Загрузить еще
                     </div>
                  </div>
               }
            </div>
         </div>}
      </div>
   );
});
