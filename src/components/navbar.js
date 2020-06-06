import React from 'react'

const Navbar = ({toggleAboutModal, toggleSkillsModal}) => (
    <nav className="navbar">
        <div>Diego De La Torre</div>
        <div className="nav-links">
            <div onClick={() => toggleAboutModal(true)}>About</div>
            <div onClick={() => toggleSkillsModal(true)}>Skills</div>
        </div>
    </nav>
)

export default Navbar