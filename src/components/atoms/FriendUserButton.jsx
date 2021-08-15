import React from "react";
import Styled from "styled-components";

const StyledDiv = Styled.div`
    color: ${(props) => props.theme.colors.grey};
    align-items: center;
    transition: all 0.25s ease;
    margin: 0.2rem 0;
    display: flex;
    flex-direction: row;
    width: 100%;

    @media (max-width: 900){
        flex-direction: column;
    }
`;

const StyledLink = Styled.a`
    border: none;
    padding: 0;
    size: 0;
    display: block;
    text-decoration: none;
`;

const StyledText = Styled.p`
    font-family: "Roboto";
    font-size: ${(props) => props.theme.fontSizes.medium};
    font-weight: normal;
    color: ${(props) => props.theme.colors.grey};
    
    text-align: center;
    margin: 0;

    :hover{
      color: ${(props) => props.theme.colors.muSpacePurple};
      transition: all 0.1s ease-in-out;
    }
`;

const UserProfPic = Styled.img`
    width: 2.2em;
    height: 2.2em;
    border-radius: 100%;
    margin: 0 0.6em;
`;

function UserButton({ text, icon, location, profile_picture }) {
    return (
        <StyledDiv>
            <UserProfPic src={profile_picture} alt="Default Profile image" />
            <StyledLink href="/profile">
                <StyledText>{text}</StyledText>
            </StyledLink>
            <div style={{margin: "0 auto"}} />
        </StyledDiv>
    );
}

export default UserButton;
