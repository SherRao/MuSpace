import React from "react";
import Styled from "styled-components";
import AlbumCover from "@atoms/AlbumCover";

const StyledDiv = Styled.div`
    color: ${props => props.theme.colors.white};
    width: 100%;
    height: auto;
    align-self: center;
    margin: 15px 0 15px 0;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    transition: all 0.25s ease;

    border-radius: 20px;
    border-style: hidden;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 4px 12px 0 rgba(0, 0, 0, 0.19);
`;

const TextContainer = Styled.div`
    color: ${props => props.theme.colors.white};
    width: 100%;
    height: auto;
    align-self: center;
    margin: 15px 0 15px 0;
    display: inline-flex;
    flex-direction: column;
    align-items: left;
    transition: all 0.25s ease;
`;

const StyledLink = Styled.a`
    border: none;
    padding: 0;
    size: 0;
    display: block;
    text-decoration: none;
    font-weight: bold;
    margin: 0 0 10px 0;
`;

const StyledText = Styled.p`
    font-family: "Roboto";
    font-size: ${props => props.theme.fontSizes.medium};
    font-weight: medium;
    color: ${props => props.theme.colors.grey};
    display: block;
    margin: 1px;
`;

function FeedObject({title, content, details, link}){
    return(
        <StyledDiv>
            <AlbumCover></AlbumCover>
            <TextContainer>
                <StyledLink href={link}>
                    <StyledText>{title}</StyledText>
                    <StyledText>{content}</StyledText>
                </StyledLink>
                <br/>
                <StyledText>{details}</StyledText>
            </TextContainer>
        </StyledDiv>
        
    );
}

export default FeedObject;