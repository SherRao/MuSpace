import React from "react";
import Styled from "styled-components";

import AlbumCover from "./AlbumCover";

// const StyledText = Styled.h2`
//     font-family: "Roboto";
//     font-size: ${props => props.theme.fontSizes.small};
//     color: ${props => props.theme.colors.black};
//     font-weight: normal;
//     align: right;
//     margin: 15px;
//     text-align: center;

// `;

const StyledDiv = Styled.div`
    color: ${props => props.theme.colors.white};
    height: auto;
    align-self: center;
    border-radius: 15px;

    display: inline-flex;
    flex-direction: row;
    align-items: center;
    transition: all 0.25s ease;

    -webkit-box-shadow: 3px 5px 4px 3px rgba(0,0,0,0.19); 
    box-shadow: 3px 5px 4px 3px rgba(0,0,0,0.19);
`;

const StyledLink = Styled.a`
    border: none;
    padding: 0;
    size: 0;
    display: block;
    text-decoration: none;

`;

const StyledText = Styled.p`
    
    

    font-family: "Roboto";
        
    font-size: ${props => props.theme.fontSizes.small};
    font-weight: medium;
        
    color: ${props => props.theme.colors.grey};
        
    align: left;
    flex: 1;
    margin: 1px;
`;

// function SidebarButton({ text, icon, children, location }) {
//     return (
//         <StyledDiv>
//             <StyledIcon>{children}</StyledIcon>
//             <StyledLink href={location}>
//                 <StyledText>{text}</StyledText>
//             </StyledLink>
            
//         </StyledDiv>
//     );
// }

function FeedObject({title, content, details, link}){
    return(
        <StyledDiv>
            <AlbumCover></AlbumCover>
            <StyledLink href={link}>
                <StyledText>{title}</StyledText>
                <StyledText>{content}</StyledText>
            </StyledLink>
            <StyledText>{details}</StyledText>
        </StyledDiv>
        
        
        // <StyledText>#Post Title</StyledText>
        // <StyledText>#Post Content</StyledText>
        // <StyledText>#Song Details</StyledText>
    )
}

export default FeedObject