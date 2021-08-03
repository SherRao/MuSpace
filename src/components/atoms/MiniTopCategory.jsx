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
    font-size: ${props => props.theme.fontSizes.mediumSmall};
    color: ${props => props.theme.colors.black};
    text-align: center;
    font-weight: medium;
`;

const StyledUsername = Styled.p`
    font-weight: bold;
    margin: 0.4rem 0;
`;

function MiniTopCategory({username, text, artist}){
    return (
        <StyledDiv>
            <StyledText>
                <StyledUsername>{username}</StyledUsername>
            </StyledText>
            <StyledDiv>
                <AlbumCover width="132px" />
            </StyledDiv>
            <StyledText>{text}</StyledText>
            <StyledText>{artist}</StyledText>
        </StyledDiv>
    );
}

export default MiniTopCategory;