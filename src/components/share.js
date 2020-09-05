import React from "react"
import {
    EmailShareButton, 
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton
} from "react-share"
import{
    FiMail,
    FiFacebook,
    FiLinkedin,
    FiTwitter
} from 'react-icons/fi'
import styled, { keyframes } from 'styled-components'

const expand = keyframes`
to{
    width: 40px;
}
`
const shrink = keyframes`
from{
    width: 40px;
}
to{
    width: 30px;
}
`

const IconContainer = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    width: 0;
    font-size: 10px;
    span{
        margin: 0 0 6px 6px;
    }
    @media(max-width: 767px){
        flex-direction: row;
        bottom: 0;
        right: 0;
        justify-content: flex-end;
        height: auto;
    }
`

const Icon = styled.div`
    font-size: 1.5rem;
    color: white;
    background-color: black;
    padding: 10px;
    width: 30px;
    animation: ${shrink} 0.1s linear both;
    &:hover{
        animation: ${expand} 0.1s linear both;
    }
`

const ShareLabel = styled.button`
    border: 1px solid black;
    text-align: center;
    font-size: 10px;
    background-color: white;
    width: 50px;
    padding: 19px 0;
    @media(max-width: 767px){
        padding: 18px 8px;
    }
`

const Share = () => {
    return(
        <IconContainer>
            <ShareLabel>Shares</ShareLabel>
            <LinkedinShareButton>
                <Icon>
                    <FiLinkedin></FiLinkedin>
                </Icon>
            </LinkedinShareButton>
            <TwitterShareButton>
                <Icon>
                    <FiTwitter></FiTwitter>
                </Icon>
            </TwitterShareButton>
            <FacebookShareButton>
                <Icon>
                    <FiFacebook></FiFacebook>
                </Icon>
            </FacebookShareButton>
            <EmailShareButton>
                <Icon>
                    <FiMail></FiMail>
                </Icon>
            </EmailShareButton>
        </IconContainer>
    );
}

export default Share