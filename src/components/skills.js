import React from "react"
import { FaReact, FaAngular, FaNodeJs } from "react-icons/fa"
import { AiFillCloud, AiOutlineConsoleSql } from "react-icons/ai"
import { DiMongodb } from "react-icons/di"
import styled from "styled-components"

const StyledIcon = styled.div`font-size: 5rem;`

const IconCard = styled.div`
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    margin: 10px;
    align-items: center;
`

const Content = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;

    @media(max-width: 767px){
        flex-direction: column;
    }
`

const Skills = () => {
    return(
        <Content>
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
                    <AiOutlineConsoleSql/>
                </StyledIcon>
                <span>SQL</span>
            </IconCard> 
            <IconCard>
                <StyledIcon>
                    <DiMongodb/>
                </StyledIcon>
                <span>MongoDB</span>
            </IconCard> 
        </Content>   
    )
}

export default Skills