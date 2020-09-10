import React from 'react'
import { Link } from "gatsby"
import { useLocation } from '@reach/router'

import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

const FooterStyles = {
    maxWidth: "700px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "20px",
    margin: "0 auto"
}

const FooterLinkStyles = {
    margin: "0 10px",
    fontSize: "1.75rem",
    textDecoration: "none",
    color: "gray"
}

const FooterLink = (props) => {
    const fontColor = props.isHome ? "white" : "gray";
    return(
        <a 
            href={props.href} target="_blank" rel="noopener noreferrer"
            style={{...FooterLinkStyles, color: fontColor}}
        >
            {props.children}
        </a>
    )
}

const Footer = () => {
    const { pathname } = useLocation();
    const isHome = pathname === '/';

    return(
        <footer style={FooterStyles}>
            {!isHome && 
                <Link to="/" style={{...FooterLinkStyles,fontSize: "12px"}}>
                    Diego De La Torre &copy; 2020
                </Link>
            }
            <FooterLink href="https://www.linkedin.com/in/diegodlt/" isHome={isHome}>
                <FaLinkedin />
            </FooterLink>
            <FooterLink href="https://github.com/Diegodlt" isHome={isHome}>
                <FaGithub />
            </FooterLink>
            <FooterLink href="https://twitter.com/Diego_dltl" isHome={isHome}>
                <FaTwitter />
            </FooterLink>
      </footer>
    )
}

export default Footer