import React from 'react'
import styled from 'styled-components'

import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

const StyledFooter = styled.footer`
    width: 100%;
    text-align: center;
    a{
        color: ${props => props.home? "white" : "black"};
        margin: 0 10px;
        font-size: 1.75rem;
        text-decoration: none;
    }
`

const Footer = () => {
    
    const isHome = window.location.pathname === '/';

    return(
        <StyledFooter home={isHome}>
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