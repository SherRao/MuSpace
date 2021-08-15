import React from "react";
import { Card } from "@atoms";
import { FriendUserButton } from "@atoms";

function FriendsMessageButton({ username, profile_picture }){
    return(
        <Card>
            <FriendUserButton
                text={username}
                location="/messages"
                profile_picture={profile_picture}
            />
        </Card>
    );
}

export default FriendsMessageButton;