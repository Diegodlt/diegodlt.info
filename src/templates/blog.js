import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { useLocation } from '@reach/router'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Share from '../components/share'
import Footer from '../components/footer'

const BlogFooter = styled.div`
    @media(max-width: 767px){
        padding-bottom: 70px;
    }
`

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
                metaDescription
                image
            }
            html
        }
    }
`

const Blog = (props)=> {
    const { href } = useLocation();
    const pageTitle = props.data.markdownRemark.frontmatter.title;
    const imageUrl = `/${props.data.markdownRemark.frontmatter.image}`;
    return(
        <>
            <Layout>
                <SEO 
                    title={pageTitle} 
                    description={props.data.markdownRemark.frontmatter.metaDescription}
                    imageUrl={imageUrl}
                />
                <Share
                    url={href}
                    title={pageTitle}
                ></Share>
                <Content>
                    <div>
                        <PostTitle>{pageTitle}</PostTitle>
                        <Time>
                            {props.data.markdownRemark.frontmatter.date}
                        </Time>
                    </div>
                    <PostBody dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}>
                    </PostBody>
                </Content>
                <BlogFooter>
                    <Footer></Footer>
                </BlogFooter>
            </Layout>
        </>
    )
}

export default Blog