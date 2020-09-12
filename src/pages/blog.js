import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from "gatsby"
import { useLocation } from '@reach/router'

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
    const { href } = useLocation();
    return(
        <Layout>
            <SEO title="Blog" description="A blog written by Diego De La Torre. I write mostly about technology, and the problems I face and the things I like to build along the way."></SEO>
            <Share url={href} title="A blog by Diego De La Torre"></Share>
            <div className="BlogContent">
              <div className="blog-title">
                <h1>
                  Blog
                </h1>
                <p>
                  I write mostly about technology, and the problems I face and the things I like to build along the way.
                </p>
              </div>
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