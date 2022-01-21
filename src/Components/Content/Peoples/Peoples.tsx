import React, {MouseEvent, useMemo} from "react";
import {People, PeopleType} from "./People/People";
import './peoples.scss'

export type PeoplesType = {
   peoples: PeopleType[]
   totalCount: number
   countPeoplesOnPage: number
   followCallback: (people_id: number) => void
   unfollowCallback: (people_id: number) => void
   setCurrentPageCallback: (currentPage: number) => void
   following_ID: number[]
}

export const Peoples: React.FC<PeoplesType> = (
   {
      peoples,
      totalCount,
      countPeoplesOnPage,
      followCallback,
      unfollowCallback,
      setCurrentPageCallback,
      following_ID,
   }
) => {
   const massPages = useMemo(() => {
      const countPages = Math.ceil(totalCount / countPeoplesOnPage)
      let pages: number[] = []
      for (let i = 1; i <= countPages; i++) {
         pages.push(i)
      }
      return pages
   }, [])

   const onClickPageHandler = (e: MouseEvent<HTMLButtonElement>) => setCurrentPageCallback(Number(e.currentTarget.value))

   return (
      <div>
         <div className={"pages"}>
            {massPages.map(p => <button className={"page"} onClick={onClickPageHandler} value={p}>{p}</button>)}
         </div>
         {peoples.map(p => {

            const onClickUnfollowHandler = () => unfollowCallback(p.id)
            const onClickFollowHandler = () => followCallback(p.id)

            return <div className="people" key={p.id}>
                  <People id={p.id}
                          name={p.name}
                          photos={p.photos}
                          followed={p.followed}
                          status={p.status}/>
                  <div className="people_followed">
                     {
                        p.followed
                           ? <button disabled={following_ID.some(id => id === p.id)} className="people_followed__btn" onClick={onClickUnfollowHandler}>Unfollow</button>
                           : <button disabled={following_ID.some(id => id === p.id)} className="people_followed__btn" onClick={onClickFollowHandler}>Follow</button>
                     }
                  </div>
               </div>
            }
         )}
      </div>
   )
}