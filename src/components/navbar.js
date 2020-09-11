import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Squash as Hamburger } from 'hamburger-react'
import { useLocation } from '@reach/router'

import Modal from '../components/modal'
import classes from '../styles/navbar.module.css'

const getIconColor = (isHome, isOpen) =>{
    if(!isOpen && !isHome){
        return "black";
    }
    return "white";
}

const ActiveLink = (props) => {
    const activeLinkStyle = { color: "#00a8f3" }
    return(
        <Link 
            {...props} 
            activeStyle={activeLinkStyle} 
        >
            {props.children}
        </Link>
    )
}

const Navbar = () => {

    const [isOpen, setOpen] = useState(false);
    const { pathname } = useLocation();
    const isHome = pathname === '/';
    const color = isHome ? "white" : "black";

    return(
        <div 
            className={classes.Navbar}
            style={{
                boxShadow: isHome && "none"
            }}
        >
            <Link style={{color}} to="/">
                Diego De La Torre
            </Link>
            <div className={classes.Bun}>
                <Hamburger 
                    size={20} 
                    toggled={isOpen} 
                    toggle={setOpen} 
                    color={getIconColor(isHome, isOpen)}
                />
            </div>
            <div className={classes.EndItems}>
                <ActiveLink style={{color}} to="/about">About</ActiveLink>
                <ActiveLink style={{color}} to="/skills">Skills</ActiveLink>
                <ActiveLink style={{color}} to="/blog">Blog</ActiveLink>
            </div>
            <Modal isOpen={isOpen}>
                <div className={classes.MobileLinks}>
                    <ActiveLink to="/about">About</ActiveLink>
                    <ActiveLink to="/skills">Skills</ActiveLink>
                    <ActiveLink to="/blog">Blog</ActiveLink>
                </div>
            </Modal>
        </div>
    )
}

export default Navbar