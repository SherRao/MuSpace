import React from "react";
import Styled from "styled-components";

const PageContainer = Styled.div`
    width: 100%;
    height: max-content;

    background-color: ${props => props.theme.colors.black};
    transition: all 0.25s ease;
`;

function MessagesPage() {
    return (
        <PageContainer>

        </PageContainer>
    );
}

export default MessagesPage;