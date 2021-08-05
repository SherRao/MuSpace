import React from "react";
import Styled from "styled-components";
import { FriendsMessageButton } from "../components/atoms";

const PageContainer = Styled.div`
    width: 100%;
    height: max-content;

`;

const StyledText = Styled.p`
    font-family: ${props => props.theme.fonts.title};
    margin: 0;
    color: ${props => props.theme.colors.black};
    font-weight: bold;
`;

const FriendsListTitle = Styled.p`
    font-size: ${props => props.theme.fontSizes.large};
`;

const FriendsListDiv = Styled.div`
    display: flex;
    flex-direction: column;
    align: center;
`;


function MessagesPage() {
    return (
        <PageContainer>
            
            <FriendsListDiv>
                <FriendsListTitle>
                    <StyledText>Friends</StyledText>
                </FriendsListTitle>

                <FriendsMessageButton text="Username" type="text" onClick={console.log("test")}/>
            
            
            </FriendsListDiv>
            
        </PageContainer>
    );
}

export default MessagesPage;