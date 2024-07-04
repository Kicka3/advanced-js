import {
   Api,
   TDialogCreateReq,
   TDialogCreateRes,
   TGetActiveMessagesRes,
   TGetDialogRes,
   TGetManagerRes, TSendMessageReq, TTypeRes
} from "../websocket/api";
import {getAuthData, setAuthData} from "../websocket/connection";
import {store} from "../store";
import {STATUSES, TAction, TMessageActive, TRating} from "../types/common";
import {Selector} from "../utils/selector";
import {CommonActions} from "./common";
import {debounceHandler, unmaskPhone} from "../utils/common";
import {RestApi} from "../rest/api";

export enum DIALOG_ACTIONS {
   DIALOG_OPEN_ACTIVE = "DIALOG_OPEN_ACTIVE",
   DIALOG_GET = "DIALOG_GET",
   DIALOG_GET_MANAGER = "DIALOG_GET_MANAGER",
   DIALOG_CREATE = "DIALOG_CREATE",
   DIALOG_LOAD_ALL_ACTIVE_MESSAGES = "DIALOG_LOAD_ALL_ACTIVE_MESSAGES",
   DIALOG_UPDATE_MESSAGES = "DIALOG_UPDATE_MESSAGES",
   DIALOG_UPDATE_CURRENT_ACTIVE_DIALOG_MESSAGES = "DIALOG_UPDATE_CURRENT_ACTIVE_DIALOG_MESSAGES",
   DIALOG_CHANGE_MANGER_STATUS = "DIALOG_CHANGE_MANGER_STATUS",
   DIALOG_TOGGLE_RATING = "DIALOG_TOGGLE_RATING",
   DIALOG_SEND_RATING = "DIALOG_SEND_RATING",
   DIALOG_UPDATE_TYPING = "DIALOG_UPDATE_TYPING"
}

export type TDialogActions =
   TAction<typeof DIALOG_ACTIONS.DIALOG_GET, TGetDialogRes> |
TAction<typeof DIALOG_ACTIONS.DIALOG_CREATE, TDialogCreateRes> |
TAction<typeof DIALOG_ACTIONS.DIALOG_UPDATE_TYPING, boolean> |
TAction<typeof DIALOG_ACTIONS.DIALOG_OPEN_ACTIVE, TGetActiveMessagesRes> |
TAction<typeof DIALOG_ACTIONS.DIALOG_UPDATE_MESSAGES, TMessageActive[]> |
TAction<typeof DIALOG_ACTIONS.DIALOG_LOAD_ALL_ACTIVE_MESSAGES, TGetActiveMessagesRes> |
TAction<typeof DIALOG_ACTIONS.DIALOG_UPDATE_CURRENT_ACTIVE_DIALOG_MESSAGES, {message: TMessageActive, isDialogOpened: boolean}> |
TAction<typeof DIALOG_ACTIONS.DIALOG_CHANGE_MANGER_STATUS, boolean> |
TAction<typeof DIALOG_ACTIONS.DIALOG_TOGGLE_RATING, boolean> |
TAction<typeof DIALOG_ACTIONS.DIALOG_SEND_RATING, TRating | undefined> |
TAction<typeof DIALOG_ACTIONS.DIALOG_GET_MANAGER, TGetManagerRes>;

export class DialogActions {

   static async get() {
      const dialogId = getAuthData().dialogId;
      const resp = await Api.getDialog({dialogId, userId: dialogId});
      if (resp.status === STATUSES.OK) {
         store.dispatch({
            type: DIALOG_ACTIONS.DIALOG_GET,
            payload: resp.data
         });

         return DialogActions.setIsOnline(true);
      }

      setAuthData({dialogId: ""});
   }

   static async create(data: Omit<TDialogCreateReq, "userId">) {
      const resp = await Api.createDialog({
         ...data,
         phone: unmaskPhone(data.phone),
         userId: Selector.getManagerInfo()?.id as string
      });

      if (resp.status === STATUSES.OK) {
         setAuthData({dialogId: resp.data.dialog?.id});
         return store.dispatch({
            type: DIALOG_ACTIONS.DIALOG_CREATE,
            payload: resp.data
         });
      }

      CommonActions.toggleInformer({
         isSuccess: false,
         isOpened: true,
         title: "Произошла ошибка",
         text: "Попробуйте написать позже"
      });
   }

   static async getManager() {
      const managerResp = await Api.getManager(window.location.href);
      if (managerResp?.status === STATUSES.OK) store.dispatch({
         type: DIALOG_ACTIONS.DIALOG_GET_MANAGER,
         payload: managerResp.data
      });
   }

   static async changeUser(userId: string, dialogId: string) {
      await Api.changeUser(userId, dialogId);
   }

   static async setIsOnline(isOnline: boolean) {
      await Api.changeIsOnline({
         dialogId: Selector.getDialogInfo()?.dialog?.id as string,
         isOnline
      });
   }

   static updateMessages(data: TMessageActive[]) {
      store.dispatch({
         type: DIALOG_ACTIONS.DIALOG_UPDATE_MESSAGES,
         payload: data
      });
   }

   static async open() {
      const dialogId = Selector.getDialogId();
      const resp = await Api.getActiveMessages({
         currentUserId: dialogId,
         limit: 25,
         dialogId,
         allNotViewed: true
      });

      resp.data.results.reverse();

      delete resp.data.consumerId;

      store.dispatch({
         type: DIALOG_ACTIONS.DIALOG_OPEN_ACTIVE,
         payload: resp.data
      });

      return resp;
   }

   static async loadAllActiveMessages() {
      const currentMessages = Selector.getMessages();
      const resp = await Api.getActiveMessages({
         currentUserId: Selector.getDialogInfo()?.dialog?.id as string,
         dialogId: currentMessages?.results[0].dialogId,
      });

      resp.data.results.reverse();

      store.dispatch({
         type: DIALOG_ACTIONS.DIALOG_LOAD_ALL_ACTIVE_MESSAGES,
         payload: resp.data
      });

      return resp;
   }

   static sendMessage(data: TSendMessageReq) {
      return Api.sendMessage(data);
   }

   static uploadFile(file: File) {
      return RestApi.uploadFile(file);
   }

   static async type() {
      const dialogId = Selector.getDialogId();
      if (!dialogId || DialogActions.isTypeRequestSent) return;

      await Api.type({userId: dialogId, dialogId});
      DialogActions.isTypeRequestSent = true;
      await new Promise(resolve => setTimeout(resolve, 5000));
      DialogActions.isTypeRequestSent = false;
   }

   static async updateTyping(data: TTypeRes) {
      const currentActiveDialogId = Selector.getDialogId();
      if (data.userId === currentActiveDialogId) return;
      store.dispatch({
         type: DIALOG_ACTIONS.DIALOG_UPDATE_TYPING,
         payload: true
      });

      await debounceHandler(DialogActions.updateTypingDebounce, 5000);
      DialogActions.finishTyping();
   }

   static finishTyping() {
      store.dispatch({
         type: DIALOG_ACTIONS.DIALOG_UPDATE_TYPING,
         payload: false
      });
   }

   static async readNewActiveMessage(message: TMessageActive) {
      await Api.getActiveMessages({id: message.id, dialogId: message.dialogId, currentUserId: Selector.getDialogId()});
   }

   static updateCurrentActiveDialogMessages(message: TMessageActive) {
      store.dispatch({
         type: DIALOG_ACTIONS.DIALOG_UPDATE_CURRENT_ACTIVE_DIALOG_MESSAGES,
         payload: {message, isDialogOpened: Selector.getIsOpened()}
      });
   }

   static setStatus(isOnline: boolean) {
      store.dispatch({
         type: DIALOG_ACTIONS.DIALOG_CHANGE_MANGER_STATUS,
         payload: isOnline
      });
   }

   static async sendRate(rating?: TRating) {
   await Api.sendRate({rating, dialogId: Selector.getDialogId()});
store.dispatch({
   type: DIALOG_ACTIONS.DIALOG_SEND_RATING,
   payload: rating
});
}

static toggleRating(showRating: boolean) {
   store.dispatch({
      type: DIALOG_ACTIONS.DIALOG_TOGGLE_RATING,
      payload: showRating
   });
}

private static updateTypingDebounce = {};
private static isTypeRequestSent = false;
}
