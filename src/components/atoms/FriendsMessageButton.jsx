import React from "react";
import { FriendUserButton } from "@atoms";

function FriendsMessageButton({ username, profile_picture, active, onClick }){
    return(
        <FriendUserButton
            text={username}
            location="/messages"
            profile_picture={profile_picture}
            active={active}
            onClick={onClick}
        />
    );
}

export default FriendsMessageButton;