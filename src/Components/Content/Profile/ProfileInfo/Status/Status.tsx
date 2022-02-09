import React, {ChangeEvent, useEffect, useState} from 'react';

export type StatusType = {
   status: string | null
   myId: number | null
   userID: number
   updateStatusCallback(status: string): void
}
export const Status: React.FC<StatusType> = React.memo((
   {
      status,
      myId,
      userID,
      updateStatusCallback,
   }
) => {
   const [editMode, setEditMode] = useState(false)
   const [newStatus, setNewStatus] = useState<string>("")

   useEffect(() => {
      if (status)
         setNewStatus(status)
      else setNewStatus("")
   }, [status])

   const onDoubleClickHandler = () => {
      if (myId === userID)
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
               !status && myId === userID
                  ? <button onClick={onClickHandler}>+</button>
                  : <span onDoubleClick={onDoubleClickHandler}>{newStatus}</span>
            )
      }
      </>
   )
})