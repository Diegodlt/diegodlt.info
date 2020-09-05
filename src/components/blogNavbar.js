import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: 'Raleway';
    padding: 20px;
    letter-spacing: 2px;
    box-shadow: 0px 0px 5px -1px rgba(0,0,0, 0.3);
    font-size: 1.25rem;
`

const NavLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  color: black;
  &:hover{
    color: #00a8f3;
  }
`

const BlogNavbar = () => {
    const activeLinkStyle = { color: "#00a8f3"}
    return(
        <Navbar>
            <NavLink to="/" activeStyle={activeLinkStyle}>
                Diego De La Torre
            </NavLink>
            <NavLink to="/blog" activeStyle={activeLinkStyle}>
                Blog
            </NavLink>
        </Navbar>
    );
}

export default BlogNavbar