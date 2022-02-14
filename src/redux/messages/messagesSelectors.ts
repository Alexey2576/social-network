import {RootState} from "../redax-store";
import {UsersType} from "../../Components/Content/Messages/Users/User/User";
import {UsersMessagesType} from "../../Components/Content/Messages/UsersMessages/UserMessages/UserMessages";

export const getUsers = (state: RootState): UsersType[] => state.messagesPage.users
export const getUsersMessages = (state: RootState): UsersMessagesType[] => state.messagesPage.usersMessages