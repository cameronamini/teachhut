import React from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLink, NavBtn, NavBtnLink } from './NavbarElements'
import { FiMenu } from "react-icons/fi"
const Navbar = ( {openSidebar} ) => {

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        teachhut
                    </NavLogo>
                    <MobileIcon >
                        <FiMenu onClick={openSidebar}/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink to="InfoSection" smooth={true} >About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="InfoSection2" smooth={true} >Discover</NavLink>
                        </NavItem>
                        <NavItem >
                            <NavLink to="InfoSection3" smooth={true}>Sign Up</NavLink>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}
export default Navbar
