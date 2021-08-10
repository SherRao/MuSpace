import React from "react";
import Styled from "styled-components";
import { ArtistProfilePic } from "@atoms";


const StyledDiv = Styled.div`
    width: clamp(20em, 30vw, 50em);
    height: 10em;

    margin: 0.5em 1em;
    
    display: flex;
    flex-flow: row wrap;
    flex-direction: row;
    align-items: center;
    align-self: flex-start;

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
    align-self: flex-start;
    
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

const MainText = Styled.div`
    font-size: clamp(0.5em, 0.5em + 1.5vw, ${props => props.theme.fontSizes.large});
    font-weight: bold;
`;

const HoursPlayed = Styled.div`
    font-size: ${props => props.theme.fontSizes.medium};

    @media (max-width: 521px){
        font-size: 3vw;
    }
`;

const SubText = Styled.div`
    font-size: 1em;

`;

const ResponsivePic = Styled(ArtistProfilePic)`
    && {    
        @media (max-width: 521px){
            display: none;
        }
    }
`;

function FavCard({card_title, main_text, sub_text, hours_played, pic_url}) {
    return (
        <StyledDiv>
            <Banner>
                <BannerText>{card_title}</BannerText>
            </Banner>
            <ResponsivePic width="5em" artist_pic_url={pic_url}/>
            <TextDiv>
                <MainText>{main_text}</MainText>
                <SubText>{sub_text}</SubText>
                <HoursPlayed>{hours_played} hours played</HoursPlayed>
            </TextDiv>
        </StyledDiv>
    );
}

export default FavCard;