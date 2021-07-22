import React from "react";
import Styled from "styled-components";
import AlbumCover from "@atoms/AlbumCover";

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
        
    );
}

export default FeedObject;