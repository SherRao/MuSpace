import React from "react";
import Styled from "styled-components";
import { ArtistProfilePic } from "@atoms";


const StyledDiv = Styled.div`
    width: calc(100% - 2em);
    min-height: 10em;
    height: max-content;

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
    background-color: ${props => props.theme.colors.grey};
    height: 3em;
    width: 100%;
    border-radius: 20px 20px 0px 0px;
    margin-top: 0px;
    align-self: flex-start;
`;

const BannerText = Styled.p`
    margin-left: 1em;
    color: ${props => props.theme.colors.white};

    font-size: ${props => props.theme.fontSizes.medium};

    @media (max-width: 521px){
        font-size: 3vw;
    }
`;


const TextDiv = Styled.div`
    display: flex;
    flex-direction: column;

    margin-left: 0.4em;
`;

const MainText = Styled.h2`
    font-size: clamp(0.5em, 0.5em + 1.5vw, ${props => props.theme.fontSizes.large});
    font-weight: bold;

    margin: 0;
`;

const HoursPlayed = Styled.p`
    font-size: ${props => props.theme.fontSizes.medium}
    
    @media (max-width: 521px){
        font-size: 3vw;
    }

    margin: 0;
`;

const SubText = Styled.p`
    font-size: ${props => props.theme.fontSizes.mediumSmall};

    margin: 0 0 0.8em 0;
`;

const ResponsivePic = Styled(ArtistProfilePic)`
    && {    
        @media (max-width: 521px){
            display: none;
        }
    }
`;

function FavCard({card_title, main_text, sub_text, score, pic_url, link}) {
    return (
        <StyledDiv>
            <Banner>
                <BannerText>{card_title}</BannerText>
            </Banner>
            <ResponsivePic width="6em" artist_pic_url={pic_url} location={link}/>
            <TextDiv>
                <MainText>{main_text}</MainText>
                <SubText>{sub_text}</SubText>
                <HoursPlayed>You listened {score}% of the time</HoursPlayed>
            </TextDiv>
        </StyledDiv>
    );
}

export default FavCard;