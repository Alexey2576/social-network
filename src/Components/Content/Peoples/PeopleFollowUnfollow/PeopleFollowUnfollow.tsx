import React, {FC, memo} from 'react';
import {Button} from "antd";
import {PeopleType} from "../../../../api/api";
import {CloseCircleOutlined, CheckCircleOutlined} from '@ant-design/icons';

export const PeopleFollowUnfollow: FC<PeopleFollowUnfollowType> = memo((
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
      <div>
         {
            people.followed
               ? <Button disabled={following_ID.some(id => id === people.id)}
                         className="people_followed__btn"
                         style={{border: "none", padding: 0, height: 0}}
                         size={"large"}
                         onClick={onClickUnfollowHandler}><CloseCircleOutlined/></Button>
               : <Button disabled={following_ID.some(id => id === people.id)}
                         className="people_followed__btn"
                         style={{border: "none", padding: 0}}
                         onClick={onClickFollowHandler}><CheckCircleOutlined /></Button>
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