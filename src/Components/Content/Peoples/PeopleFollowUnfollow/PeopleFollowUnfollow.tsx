import React from 'react';
import {PeopleType} from "../People/People";

export const PeopleFollowUnfollow: React.FC<PeopleFollowUnfollowType> = React.memo((
   props
) => {
   const {
      people,
      following_ID,
      unfollowCallback,
      followCallback,
   } = props
   const onClickUnfollowHandler = () => unfollowCallback(people.id)
   const onClickFollowHandler = () => followCallback(people.id)

   return (
      <div className="people_followed">
         {
            people.followed
               ? <button disabled={following_ID.some(id => id === people.id)}
                         className="people_followed__btn"
                         onClick={onClickUnfollowHandler}>Unfollow</button>
               : <button disabled={following_ID.some(id => id === people.id)}
                         className="people_followed__btn"
                         onClick={onClickFollowHandler}>Follow</button>
         }
      </div>
   );
})

type PeopleFollowUnfollowType = {
   following_ID: number[]
   followCallback: (people_id: number) => void
   unfollowCallback: (people_id: number) => void
   people: PeopleType
}