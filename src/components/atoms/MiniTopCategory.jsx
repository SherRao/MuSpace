import React from "react";
import Styled from "styled-components";

import {AlbumCover} from  "@atoms";

const StyledDiv = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

const StyledText = Styled.p`
    display: flex;
    justify-content: center;
    margin: 0;
    font-family: "Roboto";
    font-size: ${props => props.theme.fontSizes.medium};
    color: ${props => props.theme.colors.black};
    text-align: center;
    font-weight: medium;
`;

const StyledUsername = Styled.p`
    font-weight: bold;
    margin: 0;
`;

function MiniTopCategory({username, text, artist}){
    return (
        <StyledDiv>
            <StyledText>
                <StyledUsername>{username}</StyledUsername>
            </StyledText>
            <StyledDiv>
                <AlbumCover width="5em" />
            </StyledDiv>
            <StyledText>{text}</StyledText>
            <StyledText>{artist}</StyledText>
        </StyledDiv>
    );
}

export default MiniTopCategory;