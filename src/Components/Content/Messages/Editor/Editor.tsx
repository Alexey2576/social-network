import React, {FC} from "react";
import {Button, Form, Input} from "antd";

const {TextArea} = Input;

export const Editor: FC<EditorType> = ({onChange, onSubmit, submitting, value}) => (
   <>
      <Form.Item>
         <TextArea rows={4} onChange={onChange} value={value}/>
      </Form.Item>
      <Form.Item>
         <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
            Add Comment
         </Button>
      </Form.Item>
   </>
);

type EditorType = {
   onChange: (e: any) => void
   onSubmit: () => void
   submitting: boolean
   value: string
}