import React, {FC, memo} from "react";
import {UserLoginType} from "../../../redux/auth/authReducer";
import {Button, Checkbox, Form, Input} from 'antd';
import {Content} from "antd/lib/layout/layout";
import {LockOutlined, UserOutlined} from '@ant-design/icons';

export const LoginForm: FC<LoginType> = memo(({onSubmit, captchaUrl}) => {
   return (
      <Content style={{
         backgroundColor: "white",
         padding: "20px 20px",
         width: "100%",
      }}>
         <Form
            name="normal_login"
            className="login-form"
            initialValues={{rememberMe: true}}
            onFinish={onSubmit}
            size={"large"}

         >
            <Form.Item
               name="email"
               rules={[{required: true, message: 'Please input your email!'}]}
            >
               <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Email"/>
            </Form.Item>

            <Form.Item
               name="password"
               rules={[{required: true, message: 'Please input your password!'}]}
            >
               <Input
                  prefix={<LockOutlined className="site-form-item-icon"/>}
                  type="password"
                  placeholder="Password"
               />
            </Form.Item>

            <Form.Item>
               <Form.Item name="rememberMe" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
               </Form.Item>

               <a className="login-form-forgot" href="">
                  Forgot password
               </a>
            </Form.Item>

            {
               captchaUrl &&
               <>
                 <img src={captchaUrl} alt="captcha"/>
                 <Form.Item
                   label="Captcha"
                   name="captcha"
                   rules={[{required: true, message: 'Please input captcha!'}]}
                 >
                   <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Captcha"/>
                 </Form.Item>
               </>
            }
            <Form.Item>
               <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  style={{display: "block", width: "100%"}}

               >
                  Log in
               </Button>
               Or <a href="">register now!</a>
            </Form.Item>
         </Form>
         {/*{submitError && <span style={{color: "red"}}>{submitError}</span>}*/}
      </Content>
   )
})


type LoginType = {
   captchaUrl: string | null
   onSubmit(loginData: UserLoginType): void
}

/*
<Form
   name="basic"
   labelCol={{ span: 8 }}
   wrapperCol={{ span: 16 }}
   initialValues={{ remember: true }}
   onFinish={onFinish}
   onFinishFailed={onFinishFailed}
   autoComplete="off"
>
   <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
   >
      <Input />
   </Form.Item>

   <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
   >
      <Input.Password />
   </Form.Item>

   <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
      <Checkbox>Remember me</Checkbox>
   </Form.Item>

   <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
         Submit
      </Button>
   </Form.Item>
</Form>*/
