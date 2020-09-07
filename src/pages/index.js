import React from "react"
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import Typist from 'react-typist'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/navbar"

const IndexPage = () =>{
  return (
    <>
      <SEO title="Home" />
        <div style={styles}>
          <div className="main-content">
            <Navbar></Navbar>
            <div className="title">
              <Typist cursor={{hideWhenDone: true, blink: true}}>
                  <span>10010001001001</span>
                  <Typist.Backspace count={14} delay={500}/>
                  <span>I mean...</span>
                  <Typist.Backspace count={10} delay={500}/>
                  <span>Hello, I'm a</span>
                  <br/>
                  <span><strong>Software Developer</strong></span>
              </Typist>
            </div>
            <div className="footer">
              <a href="https://www.linkedin.com/in/diegodlt/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
              </a>
              <a href="https://github.com/Diegodlt" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
              </a>
            </div>
          </div>
        </div>
    </>
  )
}

const styles = {
  width: "100%",
  height: "100vh",
  position: "relative"
}

export default IndexPage
