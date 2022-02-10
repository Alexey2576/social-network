import React, {ChangeEvent, useEffect, useState} from 'react';

export const Status: React.FC<StatusType> = React.memo((props) => {
   const { status, authId, userIdFromURL, updateStatusCallback, } = props

   const [editMode, setEditMode] = useState(false)
   const [newStatus, setNewStatus] = useState<string>("")

   useEffect(() => {
      if (status)
         setNewStatus(status)
      else setNewStatus("")
   }, [status])

   const onDoubleClickHandler = () => {
      if (authId === Number(userIdFromURL))
         setEditMode(true)
   }
   const onBlurHandler = () => {
      updateStatusCallback(newStatus)
      setEditMode(false)
   }
   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setNewStatus(e.currentTarget.value)
   const onClickHandler = () => setEditMode(true)

   return (
      <>{
         editMode
            ? <input autoFocus
                   type="text"
                   value={newStatus}
                   onBlur={onBlurHandler}
                   onChange={onChangeHandler}
               />
            : (
               !status && authId === Number(userIdFromURL)
                  ? <button onClick={onClickHandler}>+</button>
                  : <span onDoubleClick={onDoubleClickHandler}>{newStatus}</span>
            )
      }
      </>
   )
})

export type StatusType = {
   status: string
   authId: number | null
   userIdFromURL?: string | null
   updateStatusCallback(status: string): void
}