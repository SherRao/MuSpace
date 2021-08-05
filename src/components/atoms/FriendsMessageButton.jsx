import React from "react";
import Styled from "styled-components";

import { ProfileUserName } from "./ProfileUserName";
import { UserButton } from "./UserButton";

const StyledButton = Styled.button`
    color: ${props => props.theme.colors.black};
    background-color: ${props => props.theme.colors.lightGrey};
    border-radius: 10px;
    border: none;
    align: center;

    width: 20em;
    height: 7em;
    font-size: ${props => props.theme.fontSizes.mediumSmall};
    transition: all 0.25s ease;
    margin: 0em 0em 0.8em 0.4em;
    padding: 0.5em;

    :hover {
        background-color: ${props => props.theme.colors.mediumGrey};
        filter: brightness(100%);
        
        transition: all 0.25s ease;
        cursor: pointer;
    }

`;


function FriendsMessageButton(){
    const [profilePic, setProfilePic] = React.useState(null);

    const user = Firebase.auth.currentUser;
    const username = user ? user.displayName : "@username";

    /* React.useEffect(() => {
        if(!profilePic)
            getProfilePic();

    }, []); */

    async function getProfilePic() {
        const x = await Firebase.db.collection("users").doc(user.uid).get("profile_picture");
        setProfilePic(x);
    }
    
    return(
        <UserButton
            text={username}
            location="/messages"
            profileImage={profilePic}

        />
    );
}

export default FriendsMessageButton;