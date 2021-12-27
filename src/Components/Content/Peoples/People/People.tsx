import React from 'react';
import './people.scss';
import ava from '../../../../assets/ava.png'

export type PeopleType = {
   id: number
   name: string
   status: string
   photos: {
      small: string
      large: string
   }
   followed: boolean
}

export const People: React.FC<PeopleType> = (
   {
      name,
      status,
      photos,
      ...restProps
   }
) => {

   return (
      <div className="people_info">
         <div className="people_info__img">
            <img src={photos.small !== null ? photos.small : ava} alt="photo_people" className="people_info__img__photo"/>
         </div>
         <div className="people_info__text">
            <h3 className="people_info__text__name">{name}</h3>
            <span className="people_info__text__status">{status}</span>
         </div>
      </div>
   );
};

