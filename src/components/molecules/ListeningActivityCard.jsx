import React from "react";
import Styled from "styled-components";

import { FaBookmark } from "react-icons/fa";
import { AlbumCover, Card } from "@atoms";
import { SpaceFillerDiv } from "@misc";

const StyledDiv = Styled.div`
    display: flex;
    flex-direction: column;
    width: min-content;
`;

const StyledIcon = Styled.div`
    color: ${props => props.theme.colors.pink }
`;

const StyledText = Styled.p`
    margin: 0.1em;  
    font-size: ${props => props.theme.fontSizes.medium}
`;

const StyledUsername = Styled(StyledText)`
    font-weight: bold;
`;

function ListeningActivityCard({ username, title, artist, picture_url, link }) {
    return (
        <Card style={{flexDirection: "row", padding: 0}} bgColor="grey">
            <StyledDiv>
                <AlbumCover width="5em" onClick={notImplemented} album_picture={picture_url} />
            </StyledDiv>
            <StyledDiv style={{ width: "max-content", maxWidth: "100%", justifyContent: "center" }}>
                <StyledUsername>{username}</StyledUsername>
                {title ? <StyledText>{title}</StyledText> : null}
                {artist ? <StyledText>{artist}</StyledText> : null}
            </StyledDiv>
            <SpaceFillerDiv />
            <StyledDiv>
                <StyledIcon>
                    <FaBookmark size="1.6em" style={{ margin: "0.8em 0.6em 0 0", visibility: "hidden" }}/>
                </StyledIcon>
            </StyledDiv>
        </Card>
    );
}

function notImplemented(){
    alert("This feature has not been implemented yet!");
}

export default ListeningActivityCard;