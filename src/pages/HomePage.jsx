import React from "react";
import Styled from "styled-components";
import {FavCard} from "@molecules";

const Container = Styled.div`
    width: 100%;
    height: 100%;

    padding: 0.5em 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    transition: all 0.25s ease;
    background-color: ${props => props.theme.colors.black};
`;

function HomePage() {
    return (
        <Container>
            <FavCard card_title="Your favourite artist of the week" main_text="Lil Uzi Vert" hours_played="10" pic_url="https://i.scdn.co/image/ab676161000051749cc6d44767dda18ee4e1be9f"/>
            <FavCard card_title="Your favourite song of the week" main_text="Hotel California" sub_text="Eagles" hours_played="1" pic_url="https://i.scdn.co/image/ab67616d0000b2734637341b9f507521afa9a778"/>
        </Container>
    );
}

export default HomePage;