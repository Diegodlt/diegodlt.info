import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: 'Raleway';
    font-size: 1.25rem;
    padding: 20px;
    box-shadow: 0px 0px 5px -1px rgba(0,0,0, 0.3);
`
const HomeLink = styled(props => <Link {...props} />)`
  color: #00a8f3;
  text-decoration: none;
  &:hover{
    color: blue;
  }
`

const BlogLink = styled(props => <Link {...props} />)`
  color: black;
  text-decoration: none;
  &:hover{
      color: #00a8f3;
  }
`

const BlogNavbar = () => {
    return(
        <Navbar>
            <div>
                A Blog by&nbsp;
                <HomeLink to="/">
                    Diego De La Torre
                </HomeLink>
            </div>
            <BlogLink to="/blog">
                Blog
            </BlogLink>
        </Navbar>
    );
}

export default BlogNavbar