import React from "react";
import Styled from "styled-components";

const StyledDiv = Styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 16px;
`;

const StyledNumber = Styled.p`
    font-size: ${props => props.theme.fontSizes.medium};
    font-weight: bold;
`;

const StyledProfilePic = Styled.img`
    background-color: ${props => props.theme.colors.grey};
    border-radius: 100%;
    width: 36px;
    height: 36px;
`;

const StyledText = Styled.p`
    color: ${props => props.theme.colors.grey};
    font-size: ${props => props.theme.fontSizes.mediumSmall};
    text-align: left;
    width: 80px;
`;

const StyledLink = Styled.a`
    text-decoration: none;
`;

function LeaderBoardStat({ number, src, username, hours, href }) {
    return (
        <StyledDiv style={{borderTop: number === 1 ? "0px" : "1px solid grey"}}>
            <StyledNumber>{number}.</StyledNumber>
            <StyledProfilePic src={src} alt={username} />
            <StyledLink onClick={notImplemented}><StyledText>@{username}</StyledText></StyledLink>
            <StyledText width="120px">{hours} hours</StyledText>
        </StyledDiv>
    );
}

function notImplemented(){
    alert("This feature has not been implemented yet!");
}

export default LeaderBoardStat;