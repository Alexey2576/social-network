import React, {useEffect} from "react";
import {ContainerPeoplesType} from "./ContainerPeoples";
import {People} from "./People/People";
import './peoples.scss';
import axios from 'axios'

export const Peoples: React.FC<ContainerPeoplesType> = (
   {
      peoples,
      follow,
      unfollow,
      setPeoples
   }
) => {

   useEffect(() => {
      if (peoples.length === 0) {
         axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => setPeoples(response.data.items))
      }
   }, [])

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