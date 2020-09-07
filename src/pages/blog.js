import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Share from '../components/share'
import "../styles/blog.css"

const BlogContent = styled.div`
  max-width: 700px;
  margin: auto;
  @media(max-width: 767px){
    padding: 0 20px;
  }
`

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
            <BlogContent>
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
            </BlogContent>
        </Layout>
    )
}

export default Blog