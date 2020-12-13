import React  from 'react'
import {SidebarContainer, SidebarMenu, SidebarItem, SidebarLink,  SidebarBtn, SidebarBtnLink, CloseSidebarIcon, Icon } from './SidebarElements'

const Sidebar = ({ sidebarOpen, closeSidebar}) => {

    return (
        <SidebarContainer sidebarOpen={sidebarOpen} onClick={closeSidebar}>
            <Icon>
                <CloseSidebarIcon fontSize="large" onClick={closeSidebar} />
            </Icon>
            <SidebarMenu>
                <SidebarItem>
                    <SidebarLink to='about' onClick={closeSidebar}>About</SidebarLink>
                </SidebarItem>
                <SidebarItem>
                    <SidebarLink to='discover' onClick={closeSidebar}>Discover</SidebarLink>
                </SidebarItem>
                <SidebarItem>
                    <SidebarLink to="services" onClick={closeSidebar}>Services</SidebarLink>
                </SidebarItem>
                <SidebarItem> 
                    <SidebarLink to="sign-up" onClick={closeSidebar}>Sign up</SidebarLink> 
                </SidebarItem>
            </SidebarMenu>
            <SidebarBtn>
                <SidebarBtnLink to="/sign-in" onClick={closeSidebar}>Sign in</SidebarBtnLink>
            </SidebarBtn>
        </SidebarContainer >
    )
}

export default Sidebar

