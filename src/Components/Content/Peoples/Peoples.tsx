import React from "react";
import {People, PeopleType} from "./People/People";
import './peoples.scss'
import {Paginator} from "../../Commons/Paginator/Paginator";
import {PeopleFollowUnfollow} from "./PeopleFollowUnfollow/PeopleFollowUnfollow";

export const Peoples: React.FC<PeoplesType> = React.memo((props) => {
   return (
      <div>
         <Paginator {...props}/>
         {props.peoples.map(p => {
               return (
                  <div className="people" key={p.id}>
                     <People id={p.id} name={p.name} photos={p.photos}
                             followed={p.followed} status={p.status}
                             key={`${p.id}-people`}
                     />
                     <PeopleFollowUnfollow {...props}
                                           people={p}
                                           key={`${p.id}-followUnfollow`}
                     />
                  </div>
               )
            }
         )}
      </div>
   )
})

export type PeoplesType = {
   peoples: PeopleType[]
   totalCount: number
   countPeoplesOnPage: number
   followCallback: (people_id: number) => void
   unfollowCallback: (people_id: number) => void
   setCurrentPageCallback: (currentPage: number) => void
   following_ID: number[]
}