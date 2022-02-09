import React from 'react';
import './people.scss';
import ava from '../../../../assets/ava.png'
import {NavLink} from "react-router-dom";

export const People: React.FC<PeopleType> = React.memo((props) => {
   const {name, status, photos, id} = props
   return (
      <div className="people_info">
         <div className="people_info__img">
            <NavLink to={`/profile/${id}`}>
               <img src={photos.small !== null ? photos.small : ava}
                    alt="photo_people"
                    className="people_info__img__photo"/>
            </NavLink>
         </div>
         <div className="people_info__text">
            <h3 className="people_info__text__name">{name}</h3>
            <span className="people_info__text__status">{status}</span>
         </div>
      </div>
   )
})

export type PeopleType = {
      id: number
      name: string
      status: string
      photos: { small: string, large: string }
      followed: boolean
}

