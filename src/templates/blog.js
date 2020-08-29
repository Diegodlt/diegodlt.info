import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Share from '../components/share'
import BlogNavbar from '../components/blogNavbar'

const Content = styled.div`
    max-width: 700px;
    margin: auto;
`

const PostTitle = styled.h1`
    font-family: 'Raleway';
    font-size: 3rem;
    margin-bottom: 10px;
`

const PostBody = styled.div`
    font-family: 'Open Sans';
    font-size: 20px;
    h1{
        font-family: 'Raleway';
    }
`

const Time = styled.time`
    font-family: 'Raleway'
`

export const query = graphql`
    query($slug: String!) {
        markdownRemark (fields: {slug: { eq: $slug }}){
            frontmatter {
                title
                date
            }
            html
        }
    }
`

const Blog = (props)=> {
    return(
        <>
            <Layout>
                <SEO title={props.data.markdownRemark.frontmatter.title} />
                <Share></Share>
                <BlogNavbar></BlogNavbar>
                <Content>
                    <div>
                        <PostTitle>{props.data.markdownRemark.frontmatter.title}</PostTitle>
                        <Time>
                            {props.data.markdownRemark.frontmatter.date}
                        </Time>
                    </div>
                    <PostBody dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}>
                    </PostBody>
                </Content>
            </Layout>
        </>
    )
}

export default Blog