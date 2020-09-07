import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import { Content } from '../styles/content'
import Footer from '../components/footer'

const AboutFooter = styled.div`
    position: absolute;
    bottom : 0;
    left: 0;
    width: 100%;
`

const About = () => (
    <Layout>
        <Content>
            <h1>About</h1>
            <p><strong>Hi I'm Diego,</strong></p>
            <p>
                I'm a developer living in the sunshine state (Florida) currently working with the .Net stack 
                at Highland Precision Ag.
                I'm passionate about building amazing and impactful products, regardless of the framework or technology stack. 
            </p>
            <p>    
                I've worked with various JS frameworks such as React, Angular, Node, and jQuery. Java was the first programming language I learned in-depth,
                so it will always have special place in my heart. I also enjoy learning about cloud infrastructure.
            </p>
            <p>
                Other than that I like watching movies, drinking coffee, and eating good food. 
            </p>
        </Content>
        <AboutFooter>
            <Footer></Footer>
        </AboutFooter>
    </Layout>
)

export default About