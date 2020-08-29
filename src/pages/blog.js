import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Share from '../components/share'

const BlogTitle = styled.h2`
  text-align: center;
  border-bottom: 1px solid black;
  padding-bottom: 15px;
`
const HomeLink = styled(props => <Link {...props} />)`
  color: black;
  text-decoration: none;
  &:hover{
    color: blue;
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
            <SEO title="Blog"></SEO>
            <Share></Share>
            <BlogTitle>
              A Blog by&nbsp;
                <HomeLink to="/">
                  Diego De La Torre
                </HomeLink>
            </BlogTitle>
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
        </Layout>
    )
}

export default Blog