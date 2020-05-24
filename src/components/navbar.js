import React from 'react'
import { navigate } from '@reach/router'

const Navbar = () => (
    <nav className="navbar">
        <div>Diego De La Torre</div>
        <div className="nav-links">
            <div onClick={() => {navigate('#about')}}>About</div>
            <div onClick={() => {navigate('#skills')}}>Skills</div>
            <div>Portfolio</div>
            <div className="blog-link">
                <a>Blog</a>
            </div>
        </div>
    </nav>
)

export default Navbar