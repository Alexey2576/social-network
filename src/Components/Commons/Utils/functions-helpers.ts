import {ThunkDispatchType} from "../../../redux/redax-store";
import {CommonResponseType} from "../../../api/api";
import {followSuccess, setIsFollowing, unfollowSuccess} from "../../../redux/peoples/peoplesActions";

export const followUnfollowFlow = async (people_ID: number, flag: boolean, dispatch: ThunkDispatchType, apiMethod: Promise<CommonResponseType>, actionCreator: typeof unfollowSuccess | typeof followSuccess) => {
   try {
      dispatch(setIsFollowing(true, people_ID))
      const data = await apiMethod
      if (data.resultCode === 0) {
         dispatch(actionCreator(people_ID, flag))
         dispatch(setIsFollowing(false, people_ID))
      }
   } catch (e) {
      console.log("followUnfollowFlow ", e)
   }
}

export const updateObjectInArray = (items: any[], itemId: number, objPropName: string, newObjProp: any) => {
   return items.map(p => p[objPropName] === itemId ? {...p, ...newObjProp} : p)
}