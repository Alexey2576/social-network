import React from "react";
import {NavLink} from "react-router-dom";
import {Header} from "antd/es/layout/layout";
import {Button} from "antd";
import Title from "antd/lib/typography/Title";
import './../../index.css'

export const HeaderSN: React.FC<HeaderType> = React.memo((
   {
      login,
      isAuth,
      logOutCallback,
   }
) => {

   const onClickLogOutHandler = () => logOutCallback()
   return (
      <Header
         className="site-layout-background"
         style={{
            padding: "0 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
         }}
      >
         {
            isAuth &&
            <>
              <NavLink to={'/'}>
                <Title level={2}>{login}</Title>
              </NavLink>
              <NavLink to={'/login'}>
                <Button onClick={onClickLogOutHandler}>Exit</Button>
              </NavLink>
            </>
         }
      </Header>
   )
})

export type HeaderType = {
   collapsed: boolean
   toggle: () => void
   login: string | null
   isAuth: boolean
   logOutCallback: () => void
}