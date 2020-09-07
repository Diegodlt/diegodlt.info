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
    a{
        color: white;
        text-decoration: none;
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
    }
`
const Navbar = () => {

    const [isOpen, setOpen] = useState(false);

    return(
        <Nav>
            <Link to="/">Diego De La Torre</Link>
            <Bun>
                <Hamburger size={20} toggled={isOpen} toggle={setOpen}/>
            </Bun>
            <EndItems>
                <Link to="/about">About</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/blog">Blog</Link>
            </EndItems>
            <Modal isOpen={isOpen}>
                <MobileLinks>
                    <Link to="/about">About</Link>
                    <Link to="/skills">Skills</Link>
                    <Link to="/blog">Blog</Link>
                </MobileLinks>
            </Modal>
        </Nav>
    )
}

export default Navbar