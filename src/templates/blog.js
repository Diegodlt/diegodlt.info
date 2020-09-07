import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Share from '../components/share'
import Navbar from '../components/navbar'

const Content = styled.div`
    max-width: 700px;
    margin: auto;
    @media(max-width: 767px){
        padding: 0 20px;
    }
`

const PostTitle = styled.h1`
    font-family: 'Raleway';
    font-size: 40px;
    margin-bottom: 10px;
    @media(max-width: 767px){
        font-size: 30px;
    }
`

const PostBody = styled.div`
    font-family: 'Open Sans';
    font-size: 20px;
    h1{
        font-family: 'Raleway';
    }
    h2{
        font-size: 32px;
    }
    @media(max-width: 767px){
        font-size: 18px;
        h2{
            font-size: 26px;
        }
        h3{
            font-size: 20px;
        }
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
                <Navbar></Navbar>
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