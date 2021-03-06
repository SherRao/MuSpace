import React from "react";
import Styled from "styled-components";

import { Spotify, Firebase } from "@functions";
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
    flex-grow: 4;
`;

const RightDiv = Styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
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
    const [name, setName] = React.useState(null);
    const [friends, setFriends] = React.useState(null);

    React.useEffect(async () => {
        if(!name)
            setName(await Firebase.getFullName());
    
    }, [name]);

    React.useEffect(async () => {
        if (!topArtists) {
            try {
                setTopArtists(await Spotify.getTopArtists());
            } catch(err) {
                console.log(err);
            }
        
        }
    }, [topArtists]);

    React.useEffect(async () => {
        if (!topSongs) {
            try {
                setTopSongs(await Spotify.getTopSongs());
            } catch(err) {
                console.log(err);
            }
        }
    }, [topSongs]);

    React.useEffect(async () => {
        if(!friends) {
            const friendIds = await Firebase.getFriends();
            const friendList = [];
            for(let i=0; i<friendIds.length; i++) {
                try {
                    friendList.push(await Firebase.getUser(friendIds[i]));
                } catch(err) {
                    console.log(err);
                }
            }
        
            setFriends(friendList);
        }

    }, [friends]);
    
    function greeting() {
        const time = new Date().getHours();
        if (time < 12)
            return "Good Morning";
        else if (time >= 12 && time <= 17)
            return "Good Afternoon";
        else
            return "Good Evening";
    }

    const isTopArtist = topArtists && topArtists.length > 0;
    const isTopSong = topSongs && topSongs.length > 0;
    const topArtist = isTopArtist ? topArtists[0] : null;
    const topSong = isTopSong ? topSongs[0] : null;
    const friendList = friends ? friends : [];
    
    return (
        <Panels>
            <LeftDiv>
                <TopDiv>
                    <Heading>{greeting()}, {name}!</Heading>
                    <Subtext>You listened to ### hours of music this week.</Subtext>
                </TopDiv>
                <CardContainer>
                    {isTopArtist
                        ? <FavCard card_title="Your favourite artist of the week" main_text={topArtist.name} score={topArtist.score} pic_url={topArtist.image} link={topArtist.link} />
                        : <FavCard card_title="Your favourite artist of the week" main_text="Lil Uzi Vert" score="10" pic_url="https://i.scdn.co/image/ab676161000051749cc6d44767dda18ee4e1be9f" link="https://open.spotify.com/artist/4O15NlyKLIASxsJ0PrXPfz?si=6Hfz1DAsQEmQAicoukaIuA&dl_branch=1" />
                    }
                    {isTopSong
                        ? <FavCard card_title="Your favourite song of the week" main_text={topSong.name} sub_text={topSong.artist} score={topSong.score} pic_url={topSong.image} link={topSong.link} />
                        : <FavCard card_title="Your favourite song of the week" main_text="Hotel California" sub_text="Eagles" score="1" pic_url="https://i.scdn.co/image/ab67616d0000b2734637341b9f507521afa9a778" link="https://open.spotify.com/track/40riOy7x9W7GXjyGp4pjAv?si=18366ac2b8de47d8" />
                    }
                </CardContainer>
            </LeftDiv>
            <RightDiv>
                <ListeningActivity friends={friendList} />
            </RightDiv>
        </Panels>
    );
}

export default HomePage;