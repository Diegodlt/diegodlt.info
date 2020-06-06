import React from 'react'
import styled from "styled-components"

const Content = styled.div` padding: 10px; max-width: 700px; margin: auto;`

const About = () => (
    <Content>
        <h1 style={{textAlign: "center"}}>About</h1>
        <p><strong>Hi,</strong></p>
        <p>
            My name is Diego and I'm a developer living in the sunshine state (Florida) currently working with the .Net stack 
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
)

export default About