import {addUserMessageAC, sendUserMessageAC} from "./messagesActions";
import {RootState, ThunkDispatchType, ThunkType} from "../redax-store";
import moment from "moment";
import {MessageType} from "./MessagesReducer";

export const sendNewMessage = (id: number, author: string, avatar: string, content: string): ThunkType =>
async (dispatch: ThunkDispatchType): Promise<any> => {
      return new Promise((resolve) => {
         setTimeout(() => {
            const obj: MessageType & {userId: string} = {
               avatar,
               content,
               author,
               datetime: moment().fromNow(),
               userId: id.toString(),
            }
            dispatch(addUserMessageAC(id.toString(), author, avatar));
            dispatch(sendUserMessageAC(obj, id.toString()));
            resolve(true);
         }, 2000);
      })
   }

export const sendMessage = (id: string, content: string): ThunkType =>
async (dispatch: ThunkDispatchType, getState: () => RootState): Promise<any> => {
      return new Promise((resolve) => {
         setTimeout(() => {
            const photos = getState().authState.photos
            const authId = getState().authState.id;
            const obj: MessageType & { userId: string } = {
               avatar: photos ? photos.small : "" ,
               content: content,
               author: getState().authState.login,
               datetime: moment().fromNow(),
               userId: authId ? authId.toString() : "",
            }
            if (id) {
               dispatch(sendUserMessageAC(obj, id));
            }
            resolve(true);
         }, 2000);
      })
   }
