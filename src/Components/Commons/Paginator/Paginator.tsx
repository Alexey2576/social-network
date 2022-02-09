import React, {MouseEvent, useMemo, useState} from 'react';
import './Paginator.css'
// import cn from 'classnames'

export const Paginator:React.FC<PaginatorType> = React.memo((props) => {
   const  { totalCount, pageSize, paginatorSize = 10,setCurrentPageCallback, } = props

   const paginatorCount = Math.ceil(totalCount / paginatorSize)
   const [paginatorNumber, setPaginatorNumber] = useState(1)
   const leftPaginatorPageSize = (paginatorNumber - 1) * paginatorSize + 1
   const rightPaginatorPageSize = paginatorNumber * paginatorSize

   const massPages = useMemo(() => {
      const countPages = Math.ceil(totalCount / pageSize)
      let pages: number[] = []
      for (let i = 1; i <= countPages; i++) {
         pages.push(i)
      }
      return pages
   }, [pageSize, totalCount])

   const onClickPageHandler = (e: MouseEvent<HTMLButtonElement>) => setCurrentPageCallback(Number(e.currentTarget.value))

   return (

         <div className={"pages"}>
            { paginatorNumber > 1 && <button onClick={() => {setPaginatorNumber(paginatorNumber - 1)}}>PREV</button> }
            {
               massPages
                  .filter(p => p >= leftPaginatorPageSize && p <= rightPaginatorPageSize)
                  .map(p => <button key={p} className={"page"} onClick={onClickPageHandler} value={p}>{p}</button>)
            }
            { paginatorNumber < paginatorCount && <button onClick={() => {setPaginatorNumber(paginatorNumber + 1)}}>NEXT</button> }

         </div>


   );
});

type PaginatorType = {
   totalCount: number
   pageSize: number
   paginatorSize?: number
   setCurrentPageCallback: (currentPage: number) => void
}