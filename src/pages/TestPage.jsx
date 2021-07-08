import React from "react";
import Styled from "styled-components";
import { TestOrganismComponent } from "@organisms";
import { ListeningActivityCard } from "@molecules";

const StyledDiv = Styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
`;

function TestPage() {
    return (
        <StyledDiv>
            <ListeningActivityCard />
            <ListeningActivityCard />
            <ListeningActivityCard />
        </StyledDiv>
    );
}

export default TestPage;