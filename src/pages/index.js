import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { FaLinkedin, FaGithub } from 'react-icons/fa'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/navbar"

const IndexPage = () =>{
  const data = useStaticQuery(query);

  return (
    <Layout>
      <SEO title="Home" />
        <div style={styles}>
          <div className="main-content">
            <Navbar></Navbar>
            <div className="title">
              What is going on
            </div>
            <div className="footer">
            <a href="https://github.com/Diegodlt" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
            <a href="https://www.linkedin.com/in/diegodlt/" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
            </div>
          </div>
          <Img fluid={data.fluid.childImageSharp.fluid} style={imageStyle} imgStyle={{ objectPosition: "0 0"}} />
        </div>
    </Layout>
  )
}

const styles = {
  width: "100%",
  height: "100vh",
  position: "relative"
}

const imageStyle = {
  height: "100%"
}

const query = graphql`
{
    fluid:file(relativePath: { eq:"tampa.jpg"}){
        childImageSharp {
            fluid(jpegQuality: 100, duotone: { highlight: "#0ec4f1", shadow: "#192550", opacity: 0}){
                ...GatsbyImageSharpFluid_tracedSVG
            }
        }
    }
}
`
export default IndexPage
