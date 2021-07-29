import React from "react";
import Styled from "styled-components";
import { AlbumCover, Card } from "@atoms";


const StyledDiv = Styled.div`
    max-width: 30em;
    height: 10em;
    
    display: flex;
    flex-flow: row wrap;
    flex-direction: row;
    align-items: center;

    transition: all 0.25s ease;

    background: linear-gradient(89.84deg, rgba(0, 194, 255, 0.7) 0.12%, rgba(177, 13, 255, 0.7) 99.86%);
    border-radius: 20px;

`;

const Banner = Styled.div`
    background-color: grey;
    height: 2em;
    width: 100%;
    border-radius: 15px 15px 0px 0px;

`;


const TextDiv = Styled.div`
    display: flex;
    flex-direction: column;

`;

const ArtistName = Styled.div`
    font-size: ${props => props.theme.fontSizes.large};

`;

const HoursPlayed = Styled.div`
    font-size: ${props => props.theme.fontSizes.medium};
`;



function FavArtist({artist_name, hours_played}) {
    return (
        <StyledDiv>
            <Banner/>
            <AlbumCover width="6em"/>
            <TextDiv>
                <ArtistName>{artist_name}</ArtistName>
                <HoursPlayed>{hours_played}</HoursPlayed>
            </TextDiv>
        </StyledDiv>
    );
}

export default FavArtist;