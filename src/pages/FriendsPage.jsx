import React from "react";
import Styled from "styled-components";

import { FriendTopAlbums } from "@molecules";
import { LeaderBoard, ListeningActivity } from "@organisms";

const Page = Styled.div`
    width: 100%;
    height: max-content;

    display: flex;
    flex-direction: row;

    background-color: ${props => props.theme.colors.white};
    transition: all 0.25s ease;
`;

const Row = Styled.div`
    width: 100%;
    min-height: min-content;
    height: 100%;

    display: flex;
    flex-direction: row;
`;

const Col = Styled.div`
    min-width: min-content;
    max-width: 100%;
    min-height: min-content;
    height: 100%;

    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

function FriendsPage() {
    return (
        <Page>
            <Col style={{ flexGrow: 2 }}>
                <Row>
                    <Col>
                        <FriendTopAlbums />
                    </Col>
                    <Col>
                        <LeaderBoard />
                    </Col>
                </Row>
                <Row>

                </Row>
                <Row>

                </Row>
            </Col>
            <Col>
                <ListeningActivity />
            </Col>
        </Page>
    );
}

export default FriendsPage;