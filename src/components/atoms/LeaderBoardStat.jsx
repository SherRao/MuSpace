import React from "react";
import Styled from "styled-components";

const StyledDiv = Styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    border-bottom: 1px solid ${props => props.theme.colors.grey};
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
    text-align: right;
    width: 80px;
`;

const StyledLink = Styled.a`
    text-decoration: none;
`;

function LeaderBoardStat({ number, src, username, hours, href }) {
    return (
        <StyledDiv style={{borderBottom: number === 3 ? "0px" : "1px solid grey"}}>
            <StyledNumber>{number}.</StyledNumber>
            <StyledProfilePic src={src} alt={username} />
            <StyledLink href={href}><StyledText>@{username}</StyledText></StyledLink>
            <StyledText width="120px">{hours} hours</StyledText>
        </StyledDiv>
    );
}


export default LeaderBoardStat;