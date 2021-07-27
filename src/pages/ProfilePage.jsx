import React from "react";
import Styled from "styled-components";
import { Firebase } from "@functions";

import Sidebar from "../components/organisms/Sidebar";
import AlbumCover from "../components/atoms/AlbumCover";
import FeedObject from "../components/atoms/FeedObject";
import FriendTopAlbums from "../components/molecules/FriendTopAlbums";
import TopSongs from "../components/molecules/TopSongs";
import TopArtists from "../components/molecules/TopArtists";
import ProfileUserName from "../components/atoms/ProfileUserName";

const Container = Styled.div`
    width: 100vw;
    height: 100vh;
    padding: 5em;

    margin: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: inline-flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.25s ease;
    background-color: ${props => props.theme.colors.white};

    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
`;

const Feed = Styled.div`
    width: 80%;
    padding: 20px;
    margin: 0 0 15px 0;
    border-radius: 15px;

    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */

    -webkit-box-shadow: 3px 5px 4px 3px rgba(0,0,0,0.19); 
    box-shadow: 3px 5px 4px 3px rgba(0,0,0,0.19);

`;

const StyledText = Styled.h1`
    font-family: "Roboto";
    font-size: ${props => props.theme.fontSizes.mediumMedium};
    color: ${props => props.theme.colors.black};
    font-weight: bold;
    align: right;
    margin: 15px;
    text-align: center;

`;
const StyledTexts = Styled.h1`
    font-family: "Roboto";
    font-size: ${props => props.theme.fontSizes.medium};
    color: ${props => props.theme.colors.muSpacePurple};
    font-weight: bold;
    align: right;
    margin: 15px;

`;

function ProfilePage() {

    // const [profilePic, setProfilePic ] = React.useState(null);

    // const user = Firebase.auth.currentUser;
    // const username = user.displayName;

    

    // React.useEffect(() => {
    //     if(!profilePic)
    //         getProfilePic();

    // }, []);

    // async function getProfilePic() {
    //     const x = await Firebase.db.collection("users").doc(user.uid).get("profile_picture");
    //     setProfilePic(x);

    // }

    return (
        <Container>

            {/* <ProfileUserName
                text={username}
                profileImage={profilePic}
            >
            </ProfileUserName> */}
            

            <Feed>
                <StyledText>Feed</StyledText>
                <FeedObject title="#Post Title" content="#Post Content" details="#Song Details" link="#"></FeedObject>
                <FeedObject title="#Post Title" content="#Post Content" details="#Song Details" link="#"></FeedObject>
                <FeedObject title="#Post Title" content="#Post Content" details="#Song Details" link="#"></FeedObject>
            </Feed>
            <TopArtists>
            </TopArtists>
            <TopSongs>
            </TopSongs>
            <FriendTopAlbums> 
            </FriendTopAlbums>
        </Container>
    );
}

export default ProfilePage; 