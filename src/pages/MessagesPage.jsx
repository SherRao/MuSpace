import React from "react";
import Styled from "styled-components";

import { SearchBar } from "@molecules";
import { Sidebar } from "@organisms";

const StyledDiv = Styled.div`
    background-color: ${props => props.theme.colors.white};
    display: grid;
    grid-template-columns: 18vw auto;
    grid-auto-rows: 10vh auto;

    transition: all 0.25s ease;

    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
`;

const PageContainer = Styled.div`
    padding: 0;

    background-color: ${props => props.theme.colors.white};
    /*display: inline-flex;*/
    /*flex-direction: row;*/
    /*align-items: inline;*/
    grid-column-start: 2;

    transition: all 0.25s ease;

    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
`;

const Container = Styled.div`
    width: 100%;
    height: 100%;
    padding: 5em;

    margin: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding-right: 1vw;

    display: inline-flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.25s ease;

    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
`;

function MessagesPage() {
    return (
        
        <StyledDiv>
            <Sidebar/>
            <SearchBar/>
            <PageContainer>
                <Container>
                    
                </Container>
            </PageContainer>
        </StyledDiv>

    );
}

export default MessagesPage;