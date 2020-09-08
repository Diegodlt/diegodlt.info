import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"

import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

const StyledFooter = styled.footer`
    max-width: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 20px;
    margin: 0 auto;
    a{
        color: ${props => props.home? "white" : "gray"};
        margin: 0 10px;
        font-size: 1.75rem;
        text-decoration: none;
    }
`

const EndItems = styled.div`

`

const Footer = () => {
    
    const isHome = window.location.pathname === '/';

    return(
        <StyledFooter home={isHome}>
            {!isHome && <Link to="/" style={{fontSize: "12px"}}>
                Diego De La Torre &copy; 2020
            </Link>}
            <a href="https://www.linkedin.com/in/diegodlt/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
            <a href="https://github.com/Diegodlt" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
            <a href="https://twitter.com/Diego_dltl" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
            </a>
      </StyledFooter>
    )
}

export default Footer