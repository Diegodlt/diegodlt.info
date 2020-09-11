import React from 'react'
import { graphql } from 'gatsby'
import { useLocation } from '@reach/router'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Share from '../components/share'
import Footer from '../components/footer'
import classes from '../styles/blog-template.module.css'

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
                <div className={classes.Content}>
                    <div>
                        <h1 className={classes.PostTitle}>{pageTitle}</h1>
                        <time styles={{fontFamily: "Raleway"}}>
                            {props.data.markdownRemark.frontmatter.date}
                        </time>
                    </div>
                    <div className={classes.PostBody} dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}>
                    </div>
                </div>
                <div className={classes.BlogFooter}>
                    <Footer></Footer>
                </div>
            </Layout>
        </>
    )
}

export default Blog