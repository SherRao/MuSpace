import React from "react";
import Styled from "styled-components";
import { AlbumCover, Card } from "@atoms";


const StyledDiv = Styled.div`
    background-color: ${props => props.theme.colors.white};
    
    width: 30%;
    height: 10%;
    
    display: grid;
    grid-template-columns: 20vw auto;
    grid-auto-rows: 10vh auto;

    transition: all 0.25s ease;

    background-color: linear-gradient(89.84deg, rgba(0, 194, 255, 0.7) 0.12%, rgba(177, 13, 255, 0.7) 99.86%);
    border-radius: 20px;

    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
`;

function FavArtist() {
    return (
        <StyledDiv>
            
        </StyledDiv>
    );
}

export default FavArtist;