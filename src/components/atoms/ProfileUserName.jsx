import React from "react";
import Styled from "styled-components";

const StyledDiv = Styled.div`
    //color: ${props => props.theme.colors.white};
    width: 100%;
    align-self: center;

    display: block;
    margin: 0 auto;
    align-items: center;

`;

const UserProfPic = Styled.img`
    max-width: 20%; 
    height: auto;
    border-radius: 100%;
    flex: 1;
    padding: 0.2em;
    margin-left: 0.8em;

`;


const StyledText = Styled.h1`
    font-family: "Roboto";
    font-size: ${(props) => props.theme.fontSizes.large};
    font-weight: bold;
    color: ${(props) => props.theme.colors.black};
    
    text-align: center;
    flex: 1;
    margin: 0;

    :hover{
      color: ${(props) => props.theme.colors.muSpacePurple};
      transition: all 0.1s ease-in-out;
    }
`;

function ProfileUserName({ text, profileImage }) {
    return (
        <StyledDiv>
            <UserProfPic src={profileImage} alt="Profile image" />
            <StyledText>{text}</StyledText>
        </StyledDiv>
    );
}

export default ProfileUserName;