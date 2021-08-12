import React from "react";
import Styled from "styled-components";

import { FavCard } from "@molecules";
import { ListeningActivity } from "@organisms";

const Panels = Styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 1;  
`;

const LeftDiv = Styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

const RightDiv = Styled.div`
    display: flex;
    flex-direction: column;
`;

const TopDiv = Styled.div`
    margin: 1em 0 1.8em 0;
    padding-left: 1.2em;
`;

const CardContainer = Styled.div`
    width: 100%;
    height: 100%;

    padding: 0.5em 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    transition: all 0.25s ease;
`;

const Heading = Styled.h2`
    font-size: ${props => props.theme.fontSizes.large};
    color: ${props => props.theme.colors.purple};
    margin: 0;
`;

const Subtext = Styled.p`
    font-size: ${props => props.theme.fontSizes.medium};
    margin: 0.2em 0;
`;

function HomePage() {
    return (
        <Panels>
            <LeftDiv>
                <TopDiv>
                    <Heading>Good Evening, Username</Heading>
                    <Subtext>You listened to ### hours of music this week.</Subtext>
                </TopDiv>
                <CardContainer>
                    <FavCard card_title="Your favourite artist of the week" main_text="Lil Uzi Vert" hours_played="10" pic_url="https://i.scdn.co/image/ab676161000051749cc6d44767dda18ee4e1be9f"/>
                    <FavCard card_title="Your favourite song of the week" main_text="Hotel California" sub_text="Eagles" hours_played="1" pic_url="https://i.scdn.co/image/ab67616d0000b2734637341b9f507521afa9a778"/>
                </CardContainer>
            </LeftDiv>
            <RightDiv>
                <ListeningActivity />
            </RightDiv>
        </Panels>
    );
}

export default HomePage;