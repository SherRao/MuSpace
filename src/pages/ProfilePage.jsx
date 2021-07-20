import React from "react";
import Styled from "styled-components";

import Sidebar from "../components/organisms/Sidebar";
import AlbumCover from "../components/atoms/AlbumCover";
import FeedObject from "../components/atoms/FeedObject";

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
    width: 30vw;
    height: 30vh;
    padding: 20px;
    
    border-radius: 15px;

    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */

    -webkit-box-shadow: 3px 5px 4px 3px rgba(0,0,0,0.19); 
    box-shadow: 3px 5px 4px 3px rgba(0,0,0,0.19);

`;

const StyledText = Styled.h1`
    font-family: "Roboto";
    font-size: ${props => props.theme.fontSizes.small};
    color: ${props => props.theme.colors.black};
    font-weight: bold;
    align: right;
    margin: 15px;
    text-align: center;

`;


function ProfilePage() {
    return (
        <Container>

            <Feed>
                <StyledText>Feed</StyledText>
                <FeedObject title="#Post Title" content="#Post Content" details="#Song Details" link="#"></FeedObject>
            </Feed>
            
        </Container>
    );
}

export default ProfilePage;