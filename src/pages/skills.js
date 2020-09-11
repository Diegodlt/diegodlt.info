import React from "react"
import { FaReact, FaAngular, FaNodeJs } from "react-icons/fa"
import { AiFillCloud, AiOutlineConsoleSql } from "react-icons/ai"
import { DiMongodb } from "react-icons/di"
import { TiVendorMicrosoft } from "react-icons/ti"
import styled from "styled-components"

import Layout from '../components/layout'
import { Content } from '../styles/content'
import Footer from '../components/footer'
import classes from '../styles/skills.module.css'

const StyledIcon = ({children}) => (
    <div style={{fontSize: "5rem"}}>
        {children}
    </div>
)

const IconCard = ({children}) => (
    <div className={classes.IconCard}>
        {children}
    </div>
)

const Skills = () => {
    return(
        <Layout>
            <Content>
                <h1>Skills</h1>
            </Content>
            <div className={classes.IconWrapper}>
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
            </div>   
            <div className={classes.SkillsFooter}>
                <Footer></Footer>
            </div>
        </Layout>
    )
}

export default Skills