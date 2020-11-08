import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: #f5f5f5;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 40;
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;  

`;

export const NavLogo = styled(LinkR)`
    color: black;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: 900;
    text-decoration: none;
    z-index: 999;
    @media screen and (max-width: 480px) {
        font-size: 22px;
    }
`;

export const MobileIcon = styled.div`
    display: none;
     @media screen and (max-width: 880px){
        display: block;
        color: black;   
        transform: translate(-80%, 40%);
        font-size: 1.8rem;
        cursor: pointer;
        position: absolute;
        right: 0;
        top: 0; 
        z-index: 999;
    }

`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 880px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
    z-index: 999;
`;

export const NavLink = styled(LinkS)`
    color: black;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    padding: 0 1rem;
    height: 100%;
    font-size: 26px;
    &.active {
        border-bottom: 3px solid #01bf71;
    }
    z-index: 999;
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    z-index: 999;
    @media screen and (max-width: 880px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    cursor: pointer;
    background: #01BF71;
    color: black;
    text-decoration: none;
    padding: 10px 22px;
    font-size: 16px;
    z-index: 999;
    &:hover {
        transition: 0.2s all ease-in-out;
        background: #fff;
    }
`