import React from "react";
import Styled from "styled-components";

import { FriendTopSongs, FriendTopArtists } from "@molecules";
import { LeaderBoard, ListeningActivity } from "@organisms";
import { Firebase } from "@functions";

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
    const [friends, setFriends] = React.useState(null);

    React.useEffect(async () => {
        if(!friends) {
            const friendIds = await Firebase.getFriends();
            const friendList = [];
            for(let i=0; i<friendIds.length; i++) {
                try {
                    friendList.push(await Firebase.getUser(friendIds[i]));
                } catch (err) {
                    console.log(err);
                }
            }
            setFriends(friendList);
        }
    }, [friends]);

    const friendList = friends ? friends : [];
    return (
        <Page>
            <Col style={{ flexGrow: 4, marginRight: "0.8em" }}>
                <Row>
                    <Col style={{ flexGrow: 1 }}>
                        <FriendTopSongs friends={friendList} />
                        <FriendTopArtists friends={friendList} />
                    </Col>
                    <Col style={{ flexGrow: 1, marginLeft: "0.8em" }}>
                        <LeaderBoard friends={friendList} />
                    </Col>
                </Row>
            </Col>
            <Col style={{ flexGrow: 1 }}>
                <ListeningActivity friends={friendList} />
            </Col>
        </Page>
    );
}

export default FriendsPage;