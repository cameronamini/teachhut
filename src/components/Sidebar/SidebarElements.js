import styled from 'styled-components'
// import CloseIcon from '@material-ui/icons/Close';
import { Link as LinkS } from 'react-scroll'
import { Link as LinkR } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 200;
    width: 100%;
    height: 100%;
    display: ${props => props.sidebarOpen ? "grid" : "none"};
    top: 0;
    left: 0;
    background: black;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
    align-items: center;
    grid-row-gap: 10px;                        
`

export const SidebarMenu = styled.ul`
    list-style: none;
    padding-top: 25vh;
    text-align: center;
    display: grid;
    grid-row-gap: 1vh;

`
export const SidebarItem = styled.li`
    color: white;
    height: 70px;
`

export const SidebarLink = styled(LinkS)`
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
`


export const SidebarBtn = styled.div`
    color: white;
`

export const SidebarBtnLink = styled(LinkR)`
    background: #01bf71;
    border-radius: 50px;
    padding: 10px 50px;
    text-decoration: none;
    color: black;
    font-size: 18px;
    cursor: pointer;
`
export const Icon = styled.div`
    position: absolute;
    top: 8vh;
    right: 8vh;

`
export const CloseSidebarIcon = styled(FaTimes)`
    color: white;
    z-index: 201;
    cursor: pointer;

`