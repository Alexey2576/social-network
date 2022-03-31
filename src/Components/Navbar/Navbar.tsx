import {Menu} from "antd";
import React, {FC, memo} from "react";
import {useSelector} from "react-redux";
import Sider from "antd/es/layout/Sider";
import {NavLink} from "react-router-dom";
import SubMenu from "antd/lib/menu/SubMenu";
import {RootState} from "../../redux/redax-store";
import {MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined} from "@ant-design/icons";

export const Navbar: FC<NavbarType> = memo(({collapsed, toggle}) => {

   const id = useSelector<RootState, number | null>((state: RootState) => state.authState.id)
   const fullAddressNavLink = `/profile/${id}`

   return (
      <Sider trigger={null} collapsible collapsed={collapsed}>
         <div className="logo"/>
         <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined/>}>
               <NavLink to={fullAddressNavLink}>
                  Profile
               </NavLink>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined/>}>
               <NavLink to="/peoples">
                  Peoples
               </NavLink>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined/>}>
               <NavLink to="/messages">
                  Messages
               </NavLink>
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined/>} title="User">
               <Menu.Item key="3">Tom</Menu.Item>
               <Menu.Item key="4">Bill</Menu.Item>
               <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <Menu.Item key="3" onClick={() => toggle()}>
               <NavLink to="/messages">
                  <MenuUnfoldOutlined/>
               </NavLink>
            </Menu.Item>
         </Menu>
      </Sider>
   )
})

type NavbarType = {
   collapsed: boolean
   toggle: () => void
}

