import React from "react";
import {ContainerPeoplesType} from "./ContainerPeoples";
import {People} from "./People/People";
import './peoples.scss';

export const Peoples: React.FC<ContainerPeoplesType> = (
   {
      peoples,
      follow,
      unfollow
   }
) => {
   return (
      <div>
         {peoples.map(p =>
            <div className="people" key={p.id}>
               <People id={p.id}
                       name={p.name}
                       photos={p.photos}
                       followed={p.followed}
                       status={p.status}/>
               <div className="people_followed">
                  {
                     p.followed
                        ? <button className="people_followed__btn" onClick={() => unfollow(p.id)}>Unfollow</button>
                        : <button className="people_followed__btn" onClick={() => follow(p.id)}>Follow</button>
                  }
               </div>
            </div>
         )}

      </div>
   )
}