import React from "react";
import Styled from "styled-components";
import { Firebase } from "@functions";
import queryString from "query-string";

import default_profile from "../assets/default_profile.jpg";

import { AlbumCover, FeedObject, ProfileUserName } from "@atoms";
import { FriendTopAlbums, TopArtists, TopSongs } from "@molecules";

const Container = Styled.div`
    width: 100%;

    margin: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: inline-flex;
    flex-direction: column;
    align-items: left;
    transition: all 0.25s ease;
    background-color: ${props => props.theme.colors.white};

    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
`;

const Feed = Styled.div`
    
    padding: 20px;
    margin: 0 1vw 15px 1vw;
    border-radius: 15px;

    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */

    -webkit-box-shadow: 3px 5px 4px 3px rgba(0,0,0,0.19); 
    box-shadow: 3px 5px 4px 3px rgba(0,0,0,0.19);
`;

const StyledText = Styled.h1`
    font-family: "Roboto";
    font-size: ${props => props.theme.fontSizes.large};
    color: ${props => props.theme.colors.black};
    font-weight: bold;
    align: right;
    margin: 15px;
    text-align: center;
`;

const StyledImg = Styled.img`
    max-width: 100%; 
    height: 13em;
    border-radius: 100%;
    padding: 0.2em;
    margin-left: 2em;
`;

const StyledTitle = Styled.p`
    font-family: ${props => props.theme.fonts.title};
    font-size: ${props => props.theme.fontSizes.extraLarge};
    color: ${props => props.theme.colors.black};
    font-weight: bold;
    margin: 0em 0em 0em 1em;
`;

const titleDiv = Styled.div`
    display: flex;
    flex-direction: row;
    aling-items = center;
`;

const StyledTexts = Styled.h1`
    font-family: "Roboto";
    font-size: ${props => props.theme.fontSizes.medium};
    color: ${props => props.theme.colors.muSpacePurple};
    font-weight: bold;
    align: right;
    margin: 15px;

`;

const FeedContainer = Styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    padding-top: 4em;
      
`;

const FriendFeeds = Styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 1vw 15px 1vw;
`;

function ProfilePage() {
    let data = queryString.parse(window.location.search);
    let query = null;
    if(data) 
        query = data.username;
    const [profilePicture, setProfilePicture] = React.useState(null);
    const [userName, setUserName] = React.useState(null);

    React.useEffect(async () => {
        if(!userName)
            setUserName(await Firebase.getUsername());

        if(!profilePicture)
            setProfilePicture(await Firebase.getProfilePicture());

    }, []);
    return (
        <Container>
            <titleDiv style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <StyledImg src={profilePicture} alt="Default Profile image" />
                <StyledTitle>{userName}</StyledTitle>
            </titleDiv>
            
            <FeedContainer>
                <Feed>
                    <StyledText>Feed</StyledText>
                    <FeedObject title="#Post Title" content="#Post Content" details="#Song Details" link="#"></FeedObject>
                    <FeedObject title="#Post Title" content="#Post Content" details="#Song Details" link="#"></FeedObject>
                    <FeedObject title="#Post Title" content="#Post Content" details="#Song Details" link="#"></FeedObject>
                </Feed>

                <FriendFeeds>
                    <TopArtists>
                    </TopArtists>
                    <TopSongs>
                    </TopSongs>
                    <FriendTopAlbums> 
                    </FriendTopAlbums>
                </FriendFeeds>

                

            </FeedContainer>
            
        </Container>
    );
}

export default ProfilePage; 