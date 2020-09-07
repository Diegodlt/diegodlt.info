import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Squash as Hamburger } from 'hamburger-react'

import Modal from '../components/modal'

const Nav = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
    font-family: 'Raleway';
    letter-spacing: 1px;
    font-size: 19px;
    box-shadow: ${props => props.home? "" : "0px 0px 5px -1px rgba(0,0,0, 0.3)"};
    a{
        color: ${props => props.home ? "white" : "black"};
        text-decoration: none;
    }
    @media(max-width: 767px){
        padding: 10px 20px;
    }
`

const EndItems = styled.div`
    display: flex;
    a{
        margin-left: 30px;
    }
    @media(max-width: 767px){
        display: none;
    }
`

const Bun = styled.div`
    display: none;
    z-index: 1000;
    @media(max-width: 767px){
        display: block;
    }
`

const MobileLinks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    a{
        padding: 20px 0;
        font-size: 30px;
        color: white;
    }
`

const getIconColor = (isHome, isOpen) =>{
    if(!isOpen){
       if(isHome){
           return "white";
       }else{
           return "black";
       } 
    }
    return "white";
}

const ActiveLink = (props) => {
    const activeLinkStyle = { color: "#00a8f3" }
    return(
        <Link {...props} activeStyle={activeLinkStyle}>
            {props.children}
        </Link>
    )
}

const Navbar = () => {

    const [isOpen, setOpen] = useState(false);
    const activeLinkStyle = { color: "#00a8f3"}
    const isHome = window.location.pathname === '/' ? "home" : "";

    return(
        <Nav home={isHome}>
            <Link to="/">Diego De La Torre</Link>
            <Bun>
                <Hamburger size={20} toggled={isOpen} toggle={setOpen} color={getIconColor(isHome, isOpen)}/>
            </Bun>
            <EndItems>
                <ActiveLink to="/about">About</ActiveLink>
                <ActiveLink to="/skills">Skills</ActiveLink>
                <ActiveLink to="/blog">Blog</ActiveLink>
            </EndItems>
            <Modal isOpen={isOpen}>
                <MobileLinks>
                    <ActiveLink to="/about">About</ActiveLink>
                    <ActiveLink to="/skills">Skills</ActiveLink>
                    <ActiveLink to="/blog">Blog</ActiveLink>
                </MobileLinks>
            </Modal>
        </Nav>
    )
}

export default Navbar