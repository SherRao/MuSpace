import React from "react";
import Styled from "styled-components";

import { Card } from "@atoms"; 
import { ListeningActivityCard } from "@molecules";
import { DefaultProfilePic } from "@assets";

const StyledInnerDiv = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    width: 100%;
`;

const StyledTitle = Styled.p`
    font-size: ${props => props.theme.fontSizes.mediumLarge};
    color: ${props => props.theme.colors.black};
    margin: 0 auto;
    font-weight: bold;
`;

function ListeningActivity(){
    return (
        <Card>
            <StyledTitle>Friend Listening Activity</StyledTitle>
            <StyledInnerDiv>
                <ListeningActivityCard />
            </StyledInnerDiv>
        </Card>
    );
}

export default ListeningActivity;