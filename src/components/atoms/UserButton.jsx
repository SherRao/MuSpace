import React from "react";
import { Component } from "react";
import Styled from "styled-components";
import ReactRoundedImage from "react-rounded-image";
import { FaCog } from "react-icons/fa"; /* cog button fill icon*/


// width: 75%;
// height: 10vh;
// align-self: center;
// border-radius: 15px;

// display: inline-flex;
// flex-direction: row;
// align-items: center;
const StyledDiv = Styled.div`
  color: ${(props) => props.theme.colors.grey};
  align-items: center;
  transition: all 0.25s ease;
  margin-top: 18em;  
  display: flex;
  flex-direction: row;


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
    font-size: ${(props) => props.theme.fontSizes.small};
    font-weight: normal;
    color: ${(props) => props.theme.colors.mediumGrey};
    
    text-align: center;
    flex: 1;
    margin: 0;

    :hover{
      color: ${(props) => props.theme.colors.muSpacePurple};
      transition: all 0.1s ease-in-out;
    }
`;

// only for cog icon
const StyledIcon = Styled.div`
     color: ${(props) => props.theme.colors.grey};
     align: right;
     max-width: 40%;
     height: auto;
     flex: 1;
     margin: 0px;
     padding: 3px;

     :hover{
       color: ${props => props.theme.colors.muSpacePurple};
       transition: all 0.25s ease-in-out;
     }

     *{
        display: block;
        margin: 0 auto;
        width: 2em;
        height: 2em;
     }
`;

const UserProfPic = Styled.img`
    max-width: 20%; 
    height: auto;
    border-radius: 100%;
    flex: 1;
    padding: 0.2em;
    margin-left: 0.8em;

`;

// align: left;
// max-width: 40%;
// height: auto;
// flex: 1;
// margin: 0px;
// padding: 3px;

// *{
// display: block;
// margin: 0 auto;
// width: 2em;
// height: 2em;
// }

function UserButton({ text, icon, location, profileImage }) {
  return (
    <StyledDiv>
      <UserProfPic src={profileImage} alt="Default Profile image" />
      <StyledLink href="/profile">
        <StyledText>{text}</StyledText>
      </StyledLink>
      <StyledLink href="/settings">
        <StyledIcon><FaCog/></StyledIcon>
      </StyledLink>
    </StyledDiv>
  );
}

export default UserButton;
