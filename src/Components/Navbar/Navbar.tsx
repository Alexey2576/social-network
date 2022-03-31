import {Menu} from "antd";
import React, {FC, memo} from "react";
import {useSelector} from "react-redux";
import Sider from "antd/es/layout/Sider";
import {NavLink} from "react-router-dom";
import SubMenu from "antd/lib/menu/SubMenu";
import {RootState} from "../../redux/redax-store";
import {MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined} from "@ant-design/icons";
import {getProfilePhotos} from "../../redux/auth/authSelectors";

export const Navbar: FC<NavbarType> = memo(({collapsed, toggle}) => {

   const id = useSelector<RootState, number | null>((state: RootState) => state.authState.id)
   const photos = useSelector(getProfilePhotos)
   const fullAddressNavLink = `/profile/${id}`

   return (
      <Sider
         trigger={null}
         collapsible
         collapsed={collapsed}
         style={{minHeight: "100vh"}}
      >
         <div className="logo"
              style={{
                 backgroundColor: "white",
                 width: "100%",
              }}>
            <img src={photos ? photos.large : undefined} alt="logo" style={{
               width: "100%",
               height: "100%"
            }}/>
         </div>
         <Menu theme="light" mode="inline">
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

            <SubMenu key="sub1" icon={<UserOutlined/>} title="Messages">
               <Menu.Item key="3">
                  <NavLink to="/messages">
                     Tom
                  </NavLink>
               </Menu.Item>
               <Menu.Item key="4">
                  <NavLink to="/messages">
                     Bill
                  </NavLink></Menu.Item>
               <Menu.Item key="5">
                  <NavLink to="/messages">
                     Alex
                  </NavLink>
               </Menu.Item>
            </SubMenu>

            <Menu.Item onClick={() => toggle()}>
               <MenuUnfoldOutlined/>
            </Menu.Item>
         </Menu>
      </Sider>
   )
})

type NavbarType = {
   collapsed: boolean
   toggle: () => void
}

