import React from "react";
import { Component } from "react";
import Styled from "styled-components";

import {AlbumCover, Card} from  "@atoms";
import { FaBookmark } from "react-icons/fa";

const StyledDiv = Styled.div`
    display: flex;
    flex-direction: column;
    width: min-content;
`;

const StyledIcon = Styled.div`
    color: ${props => props.theme.colors.gr }
`;

function TopSongs() {
    return (
        <Card style={{ width: "auto", height: "auto" }}>
            <StyledDiv>
                <AlbumCover width="132px" />
            </StyledDiv>
            <StyledDiv style={{ width: "100%", justifyContent: "center" }}>
                <h3 style={{ margin: "0.2em" }}><b>Username</b></h3>
                <p style={{ margin: "0.2em" }}>Song Title - Artist Name</p>
            </StyledDiv>
            <StyledDiv>
                <StyledIcon>
                    <FaBookmark size="1.8em" style={{ margin: "0.5em 0.4em 0 0" }}/>
                </StyledIcon>
            </StyledDiv>
        </Card>
    );
}

export default TopSongs;