import {Input} from 'antd';
import ava from '../../../assets/ava.png'
import {PeopleType} from "../../../api/api";
import {Card, Modal, Pagination} from "antd";
import {EditOutlined} from '@ant-design/icons';
import React, {ChangeEvent, FC, FormEvent, memo} from "react";
import {PeopleFollowUnfollow} from "./PeopleFollowUnfollow/PeopleFollowUnfollow";

const {TextArea} = Input;

export const Peoples: FC<PeoplesType> = memo((props) => {
   const {
      peoples,
      pageSize,
      totalCount,
      onShowSizeChange,
      sendMessageCallback,
      setCurrentPageCallback,
   } = props
   const {Meta} = Card;

   const [visible, setVisible] = React.useState(false);
   const [modalText, setModalText] = React.useState("");
   const [confirmLoading, setConfirmLoading] = React.useState(false);
   const [modalUserInfo, setModalUserInfo] = React.useState<PeopleType | null>(null);

   const showModal = (people: PeopleType) => {
      setModalUserInfo(people)
      setVisible(true)
   }
   const onChangeModalText = (e: ChangeEvent<HTMLTextAreaElement>) => setModalText(e.currentTarget.value)
   const handleOk = async () => {
      setConfirmLoading(true);
      if (modalUserInfo) {
         await sendMessageCallback(modalUserInfo, modalText)
            .then(() => {
               setVisible(false);
               setModalText("")
            })
            .catch(() => {
               console.log("error")
            })
            .finally(() => {
               setConfirmLoading(false);
            })
      }
   };

   const handleCancel = () => setVisible(false)

   return (
      <div style={{
         display: "flex",
         flexWrap: "wrap",
         alignItems: "center",
      }}>
         {peoples.map(people => {
            return (
               <div>
                  <Card
                     style={{width: 300, margin: "20px 10px"}}
                     cover={
                        <img
                           alt="example"
                           src={people.photos.large || ava}
                        />
                     }
                     actions={[
                        <EditOutlined onClick={() => showModal(people)} key="edit"/>,
                        <PeopleFollowUnfollow
                           {...props}
                           people={people}
                           key={`${people.id}-followUnfollow`}
                        />
                     ]}
                  >
                     <Meta
                        title={people.name}
                        description={people.status}
                     />
                  </Card>

               </div>
            )
         })}
         <Pagination
            style={{marginTop: "20px"}}
            total={totalCount}
            pageSize={pageSize}
            onChange={setCurrentPageCallback}
            onShowSizeChange={onShowSizeChange}
         />

         <Modal
            title={`Send message ${modalUserInfo ? modalUserInfo.name : "User name"}`}
            visible={visible}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
         >
            <TextArea
               onChange={onChangeModalText}
               rows={4}
               placeholder="Write message"
               maxLength={200}
               value={modalText}/>
         </Modal>
      </div>
   )
})

export type PeoplesType = {
   pageSize: number
   totalCount: number
   peoples: PeopleType[]
   following_ID: number[]
   sendMessageCallback: (userInfo: PeopleType, message: string) => Promise<any>
   followCallback: (people_id: number) => void
   unfollowCallback: (people_id: number) => void
   setCurrentPageCallback: (currentPage: number) => void
   onShowSizeChange: (current: number, size: number) => void
}