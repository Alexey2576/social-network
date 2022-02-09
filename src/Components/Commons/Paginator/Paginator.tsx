import React, {MouseEvent, useMemo} from 'react';
import './Paginator.css'

export const Paginator:React.FC<PaginatorType> = React.memo((
   {
      totalCount,
      countPeoplesOnPage,
      setCurrentPageCallback
   }
) => {

   const massPages = useMemo(() => {
      const countPages = Math.ceil(totalCount / countPeoplesOnPage)
      let pages: number[] = []
      for (let i = 1; i <= countPages; i++) {
         pages.push(i)
      }
      return pages
   }, [countPeoplesOnPage, totalCount])

   const onClickPageHandler = (e: MouseEvent<HTMLButtonElement>) => setCurrentPageCallback(Number(e.currentTarget.value))

   return (
      <div className={"pages"}>
         {massPages.map(p => <button key={p} className={"page"} onClick={onClickPageHandler} value={p}>{p}</button>)}
      </div>
   );
});

type PaginatorType = {
   totalCount: number
   countPeoplesOnPage: number
   setCurrentPageCallback: (currentPage: number) => void
}