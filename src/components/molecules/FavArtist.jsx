import React from "react";
import Styled from "styled-components";
import { ArtistProfilePic, Card } from "@atoms";


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
    height: 3em;
    width: 100%;
    border-radius: 20px 20px 0px 0px;
    margin-top: 0px;
    
`;

const BannerText = Styled.p`
    margin-left: 1em;
    color: white;

    @media (max-width: 521px){
        font-size: 3vw;
    }


`;


const TextDiv = Styled.div`
    display: flex;
    flex-direction: column;

`;

const ArtistName = Styled.div`
    font-size: ${props => props.theme.fontSizes.large};
    font-weight: bold;

    @media (max-width: 521px){
        font-size: 5vw;
    }

`;

const HoursPlayed = Styled.div`
    font-size: ${props => props.theme.fontSizes.medium};

    @media (max-width: 521px){
        font-size: 3vw;
    }
`;

const ResponsivePic = Styled(ArtistProfilePic)`
    && {    
        @media (max-width: 521px){
            display: none;
        }
    }
`;


function FavArtist({artist_name, hours_played, artist_pic_url}) {
    return (
        <StyledDiv>
            <Banner>
                <BannerText>Your favoutite artist of the week</BannerText>
            </Banner>
            <ResponsivePic width="5em" artist_pic_url={artist_pic_url}/>
            <TextDiv>
                <ArtistName>{artist_name}</ArtistName>
                <HoursPlayed>{hours_played} hours played</HoursPlayed>
            </TextDiv>
        </StyledDiv>
    );
}

export default FavArtist;