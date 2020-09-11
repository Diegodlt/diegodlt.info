import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Share from '../components/share'
import "../styles/blog.css"
import Footer from '../components/footer'

const Blog = () => {
    const data = useStaticQuery(graphql`
    query{
      allMarkdownRemark
      (sort:{fields: [frontmatter___date], order: ASC})
      {
        edges{
          node{
            frontmatter{
              title
              date
              subtitle
            }
            fields{
              slug
            }
            id
          }
        }
      }
    }
    `)

    return(
        <Layout>
            <SEO title="Blog" description="A blog written by Diego De La Torre"></SEO>
            <Share></Share>
            <div className="BlogContent">
              {data.allMarkdownRemark.edges.map(edge=>{
                  return(
                  <article key={edge.node.id}>
                      <Link to={`/${edge.node.fields.slug}`}>
                      <h1>{edge.node.frontmatter.title}</h1>
                      </Link>
                      {edge.node.frontmatter.subtitle? <p>{edge.node.frontmatter.subtitle}</p>: null}
                      <time>{edge.node.frontmatter.date}</time>
                  </article>
                  )
              })}
            </div>
            <div className="BlogFooter">
              <Footer></Footer>
            </div>
        </Layout>
    )
}

export default Blog