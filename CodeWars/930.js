import React, {memo, useCallback, useEffect, useRef, useState} from "react";
import "../group-chat-preview-contact-list/group-chat-contact-list.scss";
import {useSelector} from "react-redux";
import {Spin} from "antd";
import {Selector} from "../../../utils/selector";
import {useDebounce} from "../../../hooks/common";
import {TCommonContactUser, TContactUser, TContactUserGroupChat} from "../../../types/common";
import SimpleBar from "simplebar-react";
import {Api} from "../../../websocket/api";
import {ContactPreview} from "../../contact-preview/contact-preview";
import {UiScroll} from "../../ui/ui-scroll/ui-scroll";
import {dbBoolToBool} from "../../../utils/common";
import {CommonActions} from "../../../actions/common";

type GroupChatContactListProps = {
   addMember: (user: TContactUserGroupChat) => void;
   className?: string;
   searchTerm: string;
   setAllContacts: React.Dispatch<React.SetStateAction<TCommonContactUser | undefined>>;
   setFilteredContacts: React.Dispatch<React.SetStateAction<TContactUser[]>>;
   allContacts: TCommonContactUser | undefined;
   filteredContacts: TContactUser[];
   members: TContactUserGroupChat[];
   selectedUserIds: number[];
};

export const GroupChatContactList = memo(({
                                             className,
                                             searchTerm,
                                             addMember,
                                             setAllContacts,
                                             setFilteredContacts,
                                             allContacts,
                                             filteredContacts,
                                             members,
                                             selectedUserIds,
                                          }: GroupChatContactListProps) => {
   const currentUserId = useSelector(Selector.getUserInfo).id;
   const modeCreateChatType = useSelector(Selector.getCreatingChatMode);

   const [contactsPage, setContactsPage] = useState(1);
   const [searchContactsPage, setSearchContactsPage] = useState(1);
   const [lastPage, setLastPage] = useState(2);

   const [isSearching, setIsSearching] = useState(false);
   const [loading, setLoading] = useState(false);
   const [initialLoading, setInitialLoading] = useState(true);
   const containerRef = useRef<SimpleBar>(null);

   const debouncedSearchTerm = useDebounce(searchTerm, 500);

   useEffect(() => {
      console.log("allContacts: ", allContacts);
      console.log("filteredContacts: ", filteredContacts);
   }, [allContacts, filteredContacts]);

   // Функция для сброса скролла на верх контейнера
   const resetScroll = useCallback(() => {
      if (containerRef.current) {
         containerRef.current.getScrollElement().scrollTo(0, 0);
      }
   }, []);

   // Здесь происходит debounced поиск и вызов АПИ
   const debounceSearch = async () => {
      // Убедиться что у нас есть значение (пользователь ввел что-то)
      if (debouncedSearchTerm.length) {
         setIsSearching(true);
         setSearchContactsPage(1);
         Api.getFilteredContacts({currentUserId, searchTerm, page: 1, selectedUserIds})
            .then(res => {
               if (res && res.items) {
                  setFilteredContacts(res.items);
                  setLastPage(res.meta.last_page);
                  setSearchContactsPage(prevPage => prevPage + 1);
                  resetScroll();
               }
            })
            .catch(err => {
               console.error("Ошибка поиска введённого значения: ", err);
            })
            .finally(() => {
               setLoading(false);
            });
      } else {
         resetScroll();
         setIsSearching(false);
         setFilteredContacts([]);
         setLastPage(21);
      }
   };

   useEffect(() => {
      debounceSearch();
   }, [debouncedSearchTerm]);

   // Рендер всех контактов при 1 загрузке
   useEffect(() => {
      loadContacts();
   }, []);

   useEffect(() => {
      if (members.length === 7 || members.length === 14 || members.length == 21) {
         setLoading(true);
      }
   }, [members]);

   useEffect(() => {
      if (loading) {
         loadContacts();
      }
   }, [loading]);

   useEffect(() => {
      if (allContacts?.meta.last_page !== undefined) {
         setLastPage(allContacts?.meta.last_page);
      }
   }, [allContacts?.meta.last_page]);

   // Загрузка контактов (2 сценария: 1-поисковая подгрузка по скроллу, 2-подгрузка всех контактов по скроллу)
   const loadContacts = async () => {
      // 1-поисковая подгрузка по скроллу
      if (isSearching && searchTerm.length) {
         const res = await Api.getFilteredContacts({currentUserId, searchTerm, page: searchContactsPage, selectedUserIds});
         if (res && res.items.length) {
            setLastPage(res.meta.last_page);
            setFilteredContacts(prev => [...prev, ...res.items]);
            setSearchContactsPage(prevPage => prevPage + 1);
            setLoading(false);
         }
      } else {
         // 2-подгрузка всех контактов по скроллу
         const res = await Api.getContacts(contactsPage, selectedUserIds);
         if (res && res.data && res.data.items) {
            setAllContacts(prev => {
               const newItems = [...(prev?.items || []), ...res.data.items];
               return {
                  ...prev,
                  items: newItems,
                  meta: res.data.meta
               };
            });
            setContactsPage(prevPage => prevPage + 1);
            setLastPage(res.data.meta.last_page);
            setInitialLoading(false);
            setLoading(false);
         }
      }
   };

   const handleScroll = useCallback(() => {
      if (containerRef.current) {
         const {scrollTop, scrollHeight, clientHeight} = containerRef.current.getScrollElement();
         if (scrollHeight - (scrollTop + clientHeight) < 100 && contactsPage <= lastPage) {
            setLoading(true);
         } else if (contactsPage >= lastPage) {
            setLoading(false);
         }
      }
   }, [contactsPage, lastPage]);

   useEffect(() => {
      const container = containerRef.current;
      if (container) {
         container.getScrollElement().addEventListener("scroll", handleScroll);
         return () => {
            container.getScrollElement().removeEventListener("scroll", handleScroll);
         };
      }
   }, [handleScroll]);

   const parseUser = (user: TContactUser): TContactUserGroupChat => {
      return {
         ...user,
         source: isSearching ? "filtered" : "all",
      };
   };

   // Удаление контакта из списка
   const deleteContact = (user: TContactUser) => {
      if (modeCreateChatType !== null) {
         // Проверка на дубликаты
         const isDuplicate = members.some(member => member.id === user.id);
         if (!isDuplicate) {
            if (isSearching) {
               addMember(parseUser(user));
               setFilteredContacts(prev => prev.filter(contact => contact.id !== user.id));
            } else {
               setAllContacts(prev => {
                  if (!prev) return prev;
                  const newContacts = prev.items.filter(contact => contact.id !== user.id);
                  addMember(parseUser(user));
                  return {
                     ...prev,
                     items: newContacts
                  };
               });
            }
         } else {
            CommonActions.toggleInfoModal({isOpen: true, content: "Вы уже добавили этот контакт в группу!"});
         }
      }
   };

   //Создание чата
   const creatingChat = (user: TContactUser) => {
      if (modeCreateChatType !== null) {
         deleteContact(user);
      }
   };

   const contactListPreviews = React.useMemo(() => {
      const displayItems = searchTerm.length > 0 ? filteredContacts : allContacts?.items;
      if (!displayItems || !Array.isArray(displayItems) || displayItems.length === 0) {
         if (searchTerm.length > 0 && isSearching) {
            return <div className="contact-list__empty-message">Список контактов пуст</div>;
         }
         return null;
      }
      return displayItems.map((user: TContactUser, index: number) => {
         return <ContactPreview
            className="contact-list__preview"
            key={`${index}-${user.id}`}
            onClick={() => creatingChat(user)}
            id={user.id}
            photo_url={user.photo_url}
            name={user.name}
            office_address={user.office_address}
            job_name={user.job_name}
            phone={user.phone}
            email={user.email}
            rating={user.rating}
            isOnline={dbBoolToBool(user.isOnline)}
            color={user.color}
         />;
      });
   }, [allContacts?.items, filteredContacts]);

   return (
      <div
         className={`${className || ""} contact-list__previews-wrapper contact-list__row`}
         style={{overflowY: "auto"}}
      >
         <UiScroll
            innerRef={containerRef}
            className="contact-list__previews"
            small={true}>
            {(initialLoading) &&
               <div className={"contact-list__previews--loading"}>{<Spin tip="Загрузка..."/>}</div>
            }
            {contactListPreviews}
         </UiScroll>
      </div>
   );
});

