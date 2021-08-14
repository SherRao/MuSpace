import React from "react";
import Styled from "styled-components";
import { Spotify } from "@functions";

import { TextButton } from "@atoms";
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

    filter: drop-shadow(0 4px 4px rgba(0,0,0,0.3));
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
    const [topArtists, setTopArtists] = React.useState(null);
    const [topSongs, setTopSongs] = React.useState(null);

    React.useEffect(async () => {
        if (!topArtists) {
            Spotify.getTopArtists()
                .then(res => setTopArtists(res))
                .catch(e => console.log("ERROR", e));
        }
    }, [topArtists]);
    React.useEffect(async () => {
        if (!topSongs) {
            Spotify.getTopSongs()
                .then(res => setTopSongs(res))
                .catch(e => console.log("ERROR", e));
        }
    }, [topSongs]);

    const isTopArtist = topArtists && topArtists.length > 0;
    const isTopSong = topSongs && topSongs.length > 0;
    const topArtist = isTopArtist ? topArtists[0] : null;
    const topSong = isTopSong ? topSongs[0] : null;
    console.log(topArtists, topSongs);
    
    return (
        <Panels>
            <LeftDiv>
                <TopDiv>
                    <TextButton text="test" type="text" onClick={dostuff}/>
                    <Heading>Good Evening, Username</Heading>
                    <Subtext>You listened to ### hours of music this week.</Subtext>
                </TopDiv>
                <CardContainer>
                    {isTopArtist
                        ? <FavCard card_title="Your favourite artist of the week" main_text={topArtist.name} score={topArtist.score} pic_url={topArtist.image}/>
                        : <FavCard card_title="Your favourite artist of the week" main_text="Lil Uzi Vert" score="10" pic_url="https://i.scdn.co/image/ab676161000051749cc6d44767dda18ee4e1be9f"/>
                    }
                    {isTopSong
                        ? <FavCard card_title="Your favourite song of the week" main_text={topSong.name} sub_text={topSong.artist} score={topSong.score} pic_url={topSong.image}/>
                        : <FavCard card_title="Your favourite song of the week" main_text="Hotel California" sub_text="Eagles" score="1" pic_url="https://i.scdn.co/image/ab67616d0000b2734637341b9f507521afa9a778"/>
                    }
                </CardContainer>
            </LeftDiv>
            <RightDiv>
                <ListeningActivity />
            </RightDiv>
        </Panels>
    );
}

async function dostuff() {
    Spotify.startCompile();

}

export default HomePage;