import React from 'react'
import { Link } from 'gatsby'

const Navbar = ({toggleAboutModal, toggleSkillsModal}) => (
    <nav className="navbar">
        <div>Diego De La Torre</div>
        <div className="nav-links">
            <div onClick={() => toggleAboutModal(true)}>About</div>
            <div onClick={() => toggleSkillsModal(true)}>Skills</div>
            <div>
                <Link to="/blog">Blog</Link>
            </div>
        </div>
    </nav>
)

export default Navbar