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

const StyledSmallText = Styled(StyledText)`
    font-size: ${props => props.theme.fontSizes.mediumSmall};
`;

const StyledUsername = Styled(StyledText)`
    font-weight: bold;
    margin: 0;
`;

function MiniTopCategory({username, text, artist, album_picture}){
    return (
        <StyledDiv>
            {username ? <StyledUsername>{username}</StyledUsername> : null}
            <StyledDiv>
                <AlbumCover width="5em" album_picture={album_picture} />
            </StyledDiv>
            <StyledText>{text}</StyledText>
            {artist ? <StyledSmallText>{artist}</StyledSmallText> : null}
        </StyledDiv>
    );
}

export default MiniTopCategory;