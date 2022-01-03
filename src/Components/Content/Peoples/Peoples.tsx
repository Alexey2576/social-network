import React, {MouseEvent, useEffect, useMemo} from "react";
import {ContainerPeoplesType} from "./ContainerPeoples";
import {People} from "./People/People";
import './peoples.scss';
import axios from 'axios'

export const Peoples: React.FC<ContainerPeoplesType> = (
   {
      peoples,
      countPeoplesOnPage,
      currentPage,
      follow,
      unfollow,
      setPeoples,
      setTotalCount,
      setCurrentPage,
      setCountPages,
      countPages
   }
) => {
   const massPages = useMemo(() => {
      let pages: number[] = []
      for (let i = 1; i <= countPages; i++) {
         pages.push(i)
      }
      return pages
   }, [countPages])


   useEffect(() => {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${countPeoplesOnPage}&page=${currentPage}`)
         .then(response => {
            setPeoples(response.data.items)
            setTotalCount(response.data.totalCount)
            // setCountPages()
         })
   }, [])
   useEffect(() => {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${countPeoplesOnPage}&page=${currentPage}`)
         .then(response => {
            setPeoples(response.data.items)
         })
   }, [currentPage, countPeoplesOnPage])

   const onClickPageHandler = (e: MouseEvent<HTMLButtonElement>) => setCurrentPage(Number(e.currentTarget.value))

   return (
      <div>
         <div className={"pages"}>
            {massPages.map(p => <button className={"page"} onClick={onClickPageHandler} value={p}>{p}</button>)}
         </div>
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