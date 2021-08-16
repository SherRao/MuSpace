import React from "react";
import Styled from "styled-components";

const Button = Styled.button`
  color: ${props => props.theme.colors.grey};
  background-color: ${props => props.theme.colors.white};
  align-items: center;
  transition: all 0.25s ease;
  display: flex;
  flex-direction: row;
  border-style: none;
  border-radius: 12px;
  filter: drop-shadow(0 4px 4px rgba(0,0,0,0.3));
  padding: 1em 0.6em;
  margin: 0.6em 0.4em;
  cursor: pointer;

  @media (max-width: 900){
    flex-direction: column;
  }
  
  :hover{
    color: ${(props) => props.theme.colors.muSpacePurple};
    transition: all 0.1s ease-in-out;
  }
`;

const ActiveButton = Styled(Button)`
    color: ${props => props.theme.colors.black};
    background-color: ${props => props.theme.colors.lightPurple};
`;

const StyledText = Styled.p`
    border: none;
    padding: 0;
    margin: 0;
    size: 0;
    display: block;
    text-decoration: none;

    font-family: "Roboto";
    font-size: ${(props) => props.theme.fontSizes.medium};
    font-weight: normal;
    
    text-align: center;
    margin: 0;
`;

const UserProfPic = Styled.img`
    width: 2.2em;
    height: 2.2em;
    border-radius: 100%;
    margin: 0 0.6em;
`;

function UserButton({ theme, text, icon, location, profile_picture, active, onClick }) {
    if(active) return (
        <ActiveButton onClick={onClick}>
            <UserProfPic src={profile_picture} alt="Profile image" />
            <StyledText>{text}</StyledText>
            <div style={{ margin: "0 auto" }} />
        </ActiveButton>
    ); else return (
        <Button onClick={onClick}>
            <UserProfPic src={profile_picture} alt="Profile image" />
            <StyledText>{text}</StyledText>
            <div style={{ margin: "0 auto" }} />
        </Button>
    );
}

export default UserButton;
