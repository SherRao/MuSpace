import React from "react";
import Styled from "styled-components";

import { FriendTopAlbums, FriendTopArtists } from "@molecules";
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
    width: max-content;
    min-height: max-content;
    height: 100%;

    display: flex;
    flex-direction: column;
`;

function FriendsPage() {
    return (
        <Page>
            <Col style={{ flexGrow: 4, marginRight: "0.8em" }}>
                <Row>
                    <Col style={{ flexGrow: 1 }}>
                        <FriendTopAlbums />
                        <FriendTopArtists />
                    </Col>
                    <Col style={{ flexGrow: 1, marginLeft: "0.8em" }}>
                        <LeaderBoard />
                    </Col>
                </Row>
            </Col>
            <Col style={{ flexGrow: 1 }}>
                <ListeningActivity/>
            </Col>
        </Page>
    );
}

export default FriendsPage;