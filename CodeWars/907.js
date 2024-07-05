import {events, TEventMiddleware} from "../middlewares/websocket";
import {Dialog, TDialogRedisCreationData} from "../models/Dialog";
import {Resp, validationErrorsHandler} from "../utils/common";
import {DialogUsers} from "../models/DialogUsers";
import {TUserRedis, User} from "../models/User";
import {DB_BOOL, STATUSES, SYSTEM_ID, TABLES_NAMES} from "../utils/vars";
import {Callback, TCallback} from "../models/Callback";
import {DialogMessages} from "../models/DialogMessages";
import {Logs} from "../models/Logs";

type TDialogGetReq = { dialogId: string, userId?: string }
export const getDialog: TEventMiddleware<TDialogGetReq> = async (socket, request) => {
   const dialogData = await Dialog.getFromRedisById(request.data.dialogId, {userId: request.data.userId});
   let dialogManagerData: TUserRedis | null = null;
   if (dialogData) {
      console.log("ОТРАБОТАЛ GET DIALOG: ", dialogData);
      const dialogManager = await DialogUsers.getResponsibleFromRedis({dialogId: dialogData.dialog.id});
      socket.user = dialogData.dialog;
      if (dialogManager) {
         await DialogUsers.createRoom(dialogData.dialog.id, socket.current);
         await DialogUsers.joinRoom(dialogManager.userId, dialogData.dialog.id, socket.list);
         dialogManagerData = await User.getFromRedis(dialogManager.userId, {
            consumerId: socket.user?.id || request.data.dialogId
         });
      }
   }

   socket.current.emit(events.dialogGet, new Resp({
      data: {
         ...dialogData,
         user: dialogManagerData
      },
      status: dialogData ? STATUSES.OK : STATUSES.BAD
   }));
};

type TGetDialogReq = { contactId: string }
export const dialogGetDialogWitchContactById: TEventMiddleware<TGetDialogReq> = async (socket, request) => {
   const {contactId} = request.data;

   try {
      const dialog = await Dialog.getDialogFromRedisById(contactId);

      if (dialog) {
         // Отправка данных на фронтенд
         socket.current.emit(events.dialogGetDialogWitchContactById, new Resp({
            data: dialog,
            status: STATUSES.OK
         }));
      } else {
         console.log("Диалог не нашёлся!");
         // Если диалог не найден, отправляем соответствующий статус
         socket.current.emit(events.dialogGetDialogWitchContactById, new Resp({
            data: null,
            status: STATUSES.NOT_FOUND
         }));
      }
   } catch (err) {
      console.log("Ошибка поиска диалога!", err);
      // Отправка ошибки на фронтенд
      socket.current.emit(events.dialogGetDialogWitchContactById, new Resp({
         data: err.message || "Internal Server Error",
         status: STATUSES.INTERNAL
      }));
   }
};

// Версия без ошибки авторизации
type TDialogCreateReq = TDialogRedisCreationData
export const createDialog: TEventMiddleware<TDialogCreateReq> = async (socket, request) => {
   try {
      const errorsOrId = await Dialog.createInRedis(request.data);
      const isDataValid = await validationErrorsHandler(errorsOrId, {socket: socket.current, event: events.dialogCreate});
      if (!isDataValid) return;

      const dialogId = errorsOrId as string;

      if (request.data.fromContacts === "Y") {
         console.log("СОЗДАЮ ДИАЛОГ ДЛЯ КОНТАКТА: ");
         console.log("СОЗДАЮ КОМАНТУ В REDIS / (dialogId, socket.current: ", dialogId);
         await DialogUsers.createRoom(dialogId, socket.current);

         console.log("ПРИСОЕДИНЯЮ К КОМАНТЕ: request.data.contactId, dialogId, socket.list: ", request.data.contactId, dialogId , socket.list);
         await DialogUsers.joinRoom(request.data.userId, dialogId, socket.list);
         await DialogUsers.joinRoom(request.data.contactId, dialogId, socket.list);

         console.log("УСТАНАВЛИВАЮ ОТВЕТСТВЕННОГО: userId: request.data.userId, dialogId: ", request.data.userId, dialogId);
         await DialogUsers.setResponsibleInRedis({userId: request.data.userId, dialogId});

         // Данные об авторе и созданный диалог
         const authorData = await User.getFromRedis(request.data.userId);
         const data = await Dialog.getFromRedisById(dialogId);

         console.log("Создаю сообщение!!");
         await DialogMessages.createInRedis({
            dialogId,
            authorId: `${TABLES_NAMES.USERS}:${SYSTEM_ID}`,
            text: request.data.url,
            isViewed: DB_BOOL.N
         });

         console.log("ДИАЛОГ СОЗДАЛ: ", data);
         socket.server.to(dialogId).emit(events.dialogCreate, new Resp({data: {...data, authorData}}));
      } else {
         console.log("СОЗДАЮ ДИАЛОГ ДЛЯ КЛИЕНТА: ");
         await DialogUsers.createRoom(dialogId, socket.current);
         await DialogUsers.joinRoom(request.data.userId, dialogId, socket.list);
         await DialogUsers.setResponsibleInRedis({userId: request.data.userId, dialogId});

         // Обновляем сокет только актуальными данными
         const data = await Dialog.getFromRedisById(dialogId);
         socket.user = data?.dialog;

         console.log("Создаю сообщение!!");
         await DialogMessages.createInRedis({
            dialogId,
            authorId: `${TABLES_NAMES.USERS}:${SYSTEM_ID}`,
            text: request.data.url,
            isViewed: DB_BOOL.N
         });

         console.log("ДИАЛОГ СОЗДАЛ: ", data);
         socket.server.to(dialogId).emit(events.dialogCreate, new Resp({data}));
      }

   } catch (err) {
      console.log("не получилось создать новый диалог!!!", err);
   }
};

// // Версия без ошибки авторизации
// type TDialogCreateReq = TDialogRedisCreationData
// export const createDialog: TEventMiddleware<TDialogCreateReq> = async (socket, request) => {
//   // Для проверки что приходит
//   // const userResp = User.get(request.data.userId, (socket.user as TUserRedis).token).then(res => {
//   //   console.log("CREATE DIALOG userResp GET USER BY ID:", res);
//   // });
//
//   try {
//     const errorsOrId = await Dialog.createInRedis(request.data);
//     const isDataValid = await validationErrorsHandler(errorsOrId, {socket: socket.current, event: events.dialogCreate});
//     if (!isDataValid) return;
//
//     const dialogId = errorsOrId as string;
//
//     if (request.data.fromContacts === "Y") {
//       console.log("СОЗДАЮ ДИАЛОГ ДЛЯ КОНТАКТА: ");
//       console.log("СОЗДАЮ КОМАНТУ В REDIS / (dialogId, socket.current: ", dialogId);
//       await DialogUsers.createRoom(dialogId, socket.current);
//
//       console.log("ПРИСОЕДИНЯЮ К КОМАНТЕ: request.data.contactId, dialogId, socket.list: ", request.data.contactId, dialogId);
//       await DialogUsers.joinRoom(request.data.userId, dialogId, socket.list);
//       await DialogUsers.joinRoom(request.data.contactId, dialogId, socket.list);
//
//       console.log("УСТАНАВЛИВАЮ ОТВЕТСТВЕННОГО: userId: request.data.userId, dialogId: ", request.data.userId, dialogId);
//       await DialogUsers.setResponsibleInRedis({userId: request.data.userId, dialogId});
//
//       const authorData = await User.getFromRedis(request.data.userId);
//       const data = await Dialog.getFromRedisById(dialogId);
//
//       console.log("Создаю сообщение!!");
//       await DialogMessages.createInRedis({
//         dialogId,
//         authorId: `${TABLES_NAMES.USERS}:${SYSTEM_ID}`,
//         text: request.data.url,
//         isViewed: DB_BOOL.N
//       });
//
//       console.log("ДИАЛОГ СОЗДАЛ: ", data);
//       socket.server.to(dialogId).emit(events.dialogCreate, new Resp({data: {...data, authorData}}));
//     } else {
//       console.log("СОЗДАЮ ДИАЛОГ ДЛЯ КЛИЕНТА: ");
//       await DialogUsers.createRoom(dialogId, socket.current);
//       await DialogUsers.joinRoom(request.data.userId, dialogId, socket.list);
//       await DialogUsers.setResponsibleInRedis({userId: request.data.userId, dialogId});
//
//       // Обновляем сокет только актуальными данными
//       const data = await Dialog.getFromRedisById(dialogId);
//       socket.user = data?.dialog;
//
//       console.log("Создаю сообщение!!");
//       await DialogMessages.createInRedis({
//         dialogId,
//         authorId: `${TABLES_NAMES.USERS}:${SYSTEM_ID}`,
//         text: request.data.url,
//         isViewed: DB_BOOL.N
//       });
//
//       console.log("ДИАЛОГ СОЗДАЛ: ", data);
//       socket.server.to(dialogId).emit(events.dialogCreate, new Resp({data}));
//     }
//
//   } catch (err) {
//     console.log("не получилось создать новый диалог!!!", err);
//   }
// };

// Старая рабочая версия без контактов
// type TDialogCreateReq = TDialogRedisCreationData
// export const createDialog: TEventMiddleware<TDialogCreateReq> = async (socket, request) => {
//   try {
//     const errorsOrId = await Dialog.createInRedis(request.data);
//
//     const isDataValid = await validationErrorsHandler(errorsOrId, {
//       socket: socket.current,
//       event: events.dialogCreate
//     });
//     if (!isDataValid) return;
//
//     const dialogId = errorsOrId as string;
//
//     // Создание комнаты
//     await DialogUsers.createRoom(dialogId, socket.current);
//     // Присоединение к комнате
//     await DialogUsers.joinRoom(request.data.userId, dialogId, socket.list);
//     // Устанавливается ответственный пользователь (создатель) в Redis
//     await DialogUsers.setResponsibleInRedis({userId: request.data.userId, dialogId});
//
//     // Получение данных диалога из Redis и установка в состояние сокета
//     const data = await Dialog.getFromRedisById(errorsOrId as string);
//     socket.user = data?.dialog;
//
//     console.log("CONTROLLERS: получаю данные из Redis с созданным диалогом (data):", data);
//
//     // Создание сообщения в диалоге (Создается новое сообщение в диалоге, которое указывает на URL из запроса и помечается как непрочитанное)
//     await DialogMessages.createInRedis({
//       dialogId,
//       authorId: `${TABLES_NAMES.USERS}:${SYSTEM_ID}`,
//       text: request.data.url,
//       isViewed: DB_BOOL.N
//     });
//
//     console.log("Диалог создал! :", data);
//
//     // Отправка события (всем участникам комнаты диалога с данными о созданном диалоге)
//     socket.server.to(dialogId).emit(events.dialogCreate, new Resp({data}));
//
//   } catch (err) {
//     console.log("не получилось создать новый диалог!!!", err);
//   }
// };

// sendCallback отправляет обратный вызов и уведомляет клиентов
type TDialogSendCallbackReq = TCallback
export const sendCallback: TEventMiddleware<TDialogSendCallbackReq> = async (socket, request) => {
   const resultOrErrors = await Callback.send(request.data);
   const isDataValid = await validationErrorsHandler(resultOrErrors, {
      socket: socket.current,
      event: events.dialogSendCallback
   });

   if (!isDataValid) return;

   socket.current.emit(events.dialogSendCallback, new Resp({data: resultOrErrors}));
};

// Получение клиентом менеджера
type TDialogGetManagerReq = { pageUrl: string }
export const getManager: TEventMiddleware<TDialogGetManagerReq> = async (socket, request) => {

   // Получение информации о менеджере для нового диалога
   const manager = await User.getForNewDialog(request.data.pageUrl);

   socket.current.emit(events.dialogGetManager, new Resp({
      data: manager,
      status: manager?.isOnline === DB_BOOL.Y ? STATUSES.OK : STATUSES.NOT_FOUND,
   }));
};


type TDialogChangeUserReq = { userId: string, dialogId: string }
export const changeUser: TEventMiddleware<TDialogChangeUserReq> = async (socket, request) => {
   const prevResponsibleUser = await DialogUsers.getResponsibleFromRedis({
      dialogId: request.data.dialogId,
      isCurrent: DB_BOOL.Y
   });

   if (prevResponsibleUser?.userId === request.data.userId) return;

   const result = await DialogUsers.setResponsibleInRedis({
      userId: request.data.userId,
      dialogId: request.data.dialogId
   });

   const isValid = await validationErrorsHandler(result, {
      socket: socket.current,
      event: events.dialogChangeUser
   });
   if (!isValid) return;
   if (prevResponsibleUser) {
      await DialogUsers.leaveDialog(prevResponsibleUser.userId, prevResponsibleUser.dialogId, socket.list);

      // const resp = new Resp({
      //   data: {userId: prevResponsibleUser.id, isOnline: DB_BOOL.N}
      // });
      // await User.changeStatus(prevResponsibleUser.id, DB_BOOL.N);
      // await Dialog.toggleIsOnline(prevResponsibleUser?.userId, DB_BOOL.N);
      // socket.server.to(request.data.dialogId).emit(events.dialogChangeIsOnline, new Resp({
      //   data: {id: request.data.dialogId, isOnline: DB_BOOL.N}
      // }));
      //
      // const dialogs = await DialogUsers.getFromRedis({
      //   where: {userId: prevResponsibleUser?.userId, isCurrent: DB_BOOL.Y}
      // });
      //
      // dialogs.results.forEach(dialog => {
      //   socket.server.to(dialog.dialogId).emit(events.officeChangeStatus, new Resp({
      //     data: {userId: prevResponsibleUser.id, isOnline: DB_BOOL.N}
      //   }));
      // });
      //
      // if (!dialogs.results.length) socket.current.emit(events.officeChangeStatus, new Resp({
      //   data: {userId: prevResponsibleUser.id, isOnline: DB_BOOL.N}
      // }));
      // socket.server.to(prevResponsibleUser?.userId as string).emit(events.officeChangeStatus, resp);
   }
   await DialogUsers.joinRoom(request.data.userId, request.data.dialogId, socket.list);

   const dialogData = await Dialog.getFromRedisById(request.data.dialogId, {parseFiles: true});
   const newResponsibleRecord = await DialogUsers.getResponsibleFromRedis({dialogId: dialogData?.dialog.id});
   const newResponsible = await User.get((newResponsibleRecord?.userId as string), (socket.user as any).token);

   const dialog = await DialogMessages.getFromRedis({where: {dialogId: request.data.dialogId}});
   const systemMessages = dialog.results.filter(mes => mes.authorId === "users:-1");

   await Promise.all(systemMessages.map((mes) => {
      if (mes.text.includes("http")) return;
      DialogMessages.deleteMessage(mes?.id);
   }));

   const id = await DialogMessages.createInRedis({
      dialogId: request.data.dialogId,
      authorId: `${TABLES_NAMES.USERS}:${SYSTEM_ID}`,
      text: `Специалист ${newResponsible.name} ${newResponsible.surname} присоединился к чату`,
      isViewed: DB_BOOL.N
   });

   const message = await DialogMessages.getFromRedisById(id as string, {
      timestamps: true,
      transformTimestamps: true
   }) as any;
   const author = await DialogMessages.getAuthorFromRedis(message);
   delete message.authorId;
   message.author = author;
   message.forceUpdate = true;

   const resp = new Resp({
      data: {
         dialogData, user: newResponsible
      }
   });

   socket.server.to(prevResponsibleUser?.userId as string).emit(events.dialogChangeUser, resp);
   socket.server.to(request.data.dialogId).emit(events.dialogChangeUser, resp);
   socket.server.to(request.data.dialogId).emit(events.messageCreate, new Resp({data: message}));

   const dialogId = await Logs.getResponsibleFromRedis({dialogId: request.data.dialogId});
   const log = await Logs.getFromRedisById(dialogId.id);
   await Logs.updateLog(log, {
      count: +log.count + 1,
      managers: `${log.managers}, ${newResponsible.family} ${newResponsible.name} ${newResponsible.surname}`
   });
};


type TDialogShowRateReq = { dialogId: string }
export const showRate: TEventMiddleware<TDialogShowRateReq> = async (socket, request) => {
   await Dialog.toggleRating(request.data.dialogId, DB_BOOL.Y);
   const data = await Dialog.getFromRedisById(request.data.dialogId);

   socket.server.to(request.data.dialogId).emit(events.dialogShowRate, new Resp({data}));
};


type TDialogUpdateTypingReq = { dialogId: string, userId?: string }
export const updateTyping: TEventMiddleware<TDialogUpdateTypingReq> = async (socket, request) => {
   socket.server.to(request.data.dialogId).emit(events.dialogTyping, new Resp({
      data: {
         userId: request.data.userId,
         dialogId: request.data.dialogId
      }
   }));
};


type TDialogSendRateReq = { dialogId: string, rating?: number }
export const sendRate: TEventMiddleware<TDialogSendRateReq> = async (socket, request) => {
   const result = await Dialog.rate(request.data.dialogId, request.data.rating);
   const isValid = await validationErrorsHandler(result, {
      socket: socket.current,
      event: events.dialogSendRate
   });

   if (!isValid) return;
   socket.server.to(request.data.dialogId).emit(events.dialogSendRate, new Resp({
      data: request.data
   }));
};

type TDialogChangeIsOnlineReq = { dialogId: string, isOnline: DB_BOOL }
export const changeIsOnline: TEventMiddleware<TDialogChangeIsOnlineReq> = async (socket, request) => {
   const {dialogId, isOnline} = request.data;
   await Dialog.toggleIsOnline(dialogId, isOnline);

   socket.server.to(request.data.dialogId).emit(events.dialogChangeIsOnline, new Resp({
      data: {id: dialogId, isOnline: isOnline}
   }));
};
