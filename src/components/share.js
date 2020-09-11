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

import "../styles/share.css"

const Icon = ({children}) => (
    <div className="Icon">
        {children}
    </div>
)

const Share = ({url, title}) => {
    return(
        <div className="IconContainer">
            <button className="ShareLabel">Shares</button>
            <LinkedinShareButton
                url={url}
                title={title}
                source={url}
            >
                <Icon>
                    <FiLinkedin></FiLinkedin>
                </Icon>
            </LinkedinShareButton>
            <TwitterShareButton 
                url={url} 
                title={title} 
                via="Diego_dlt"
            >
                <Icon>
                    <FiTwitter></FiTwitter>
                </Icon>
            </TwitterShareButton>
            <FacebookShareButton 
                url={url}
                quote={title} 
            >
                <Icon>
                    <FiFacebook></FiFacebook>
                </Icon>
            </FacebookShareButton>
            <EmailShareButton
                url={url}
                subject={title}
            >
                <Icon>
                    <FiMail></FiMail>
                </Icon>
            </EmailShareButton>
        </div>
    );
}

export default Share