import React from "react"
import { FaReact, FaAngular, FaNodeJs } from "react-icons/fa"
import { AiFillCloud, AiOutlineConsoleSql } from "react-icons/ai"
import { DiMongodb } from "react-icons/di"
import { TiVendorMicrosoft } from "react-icons/ti"
import styled from "styled-components"

import Layout from '../components/layout'
import Navbar from "../components/navbar"

import { Content } from '../styles/content'

const StyledIcon = styled.div`font-size: 5rem;`

const IconCard = styled.div`
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    margin: 25px 40px;
    align-items: center;
`

const IconWrapper = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;

    @media(max-width: 767px){
        flex-direction: column;
    }
`

const Skills = () => {
    return(
        <Layout>
            <Navbar></Navbar>
            <Content>
                <h1>Skills</h1>
                These are some of the technologies I actively use and enjoy working with.
            </Content>
            <IconWrapper>
                <IconCard>
                    <StyledIcon>
                        <FaReact />
                    </StyledIcon>
                    <span>React</span>
                </IconCard> 
                <IconCard>
                    <StyledIcon>
                        <FaAngular />
                    </StyledIcon>
                    <span>Angular</span>
                </IconCard> 
                <IconCard>
                    <StyledIcon>
                        <FaNodeJs />
                    </StyledIcon>
                    <span>Node.js</span>
                </IconCard>
                <IconCard>
                    <StyledIcon>
                        <AiFillCloud/>
                    </StyledIcon>
                    <span>AWS/Azure</span>
                </IconCard> 
                <IconCard>
                    <StyledIcon>
                        <DiMongodb/>
                    </StyledIcon>
                    <span>MongoDB</span>
                </IconCard> 
                <IconCard>
                    <StyledIcon>
                        <TiVendorMicrosoft />
                    </StyledIcon>
                    <span>.Net</span>
                </IconCard>
            </IconWrapper>   
        </Layout>
    )
}

export default Skills