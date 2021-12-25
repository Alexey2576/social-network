import React from "react";
import {ContainerPeoplesType} from "./ContainerPeoples";
import {People} from "./People/People";

export const Peoples: React.FC<ContainerPeoplesType> = (
   {
      peoples
   }
) => {
   return (
      <div>
         {peoples.map(p => <People key={p.id}
                                   id={p.id}
                                   name={p.name}
                                   photos={p.photos}
                                   followed={p.followed}
                                   status={p.status}/>)}
      </div>
   )
}