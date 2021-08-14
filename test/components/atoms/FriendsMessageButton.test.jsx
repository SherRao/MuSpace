import React from "react";

import { Card } from "@atoms";
import { FriendUserButton } from "@atoms";
import Firebase from "firebase/app";
import "firebase/auth";


function FriendsMessageButton(){
    const [profilePic, setProfilePic] = React.useState(null);

    const user = Firebase.auth().currentUser;
    const username = user ? user.displayName : "@username";

    React.useEffect(() => {
        if(!profilePic)
            getProfilePic();
    }, []);

    async function getProfilePic() {
        const x = await Firebase.db.collection("users").doc(user.uid).get("profile_picture");
        setProfilePic(x);
    }
    
    return(
        <Card>
            <FriendUserButton
                text={username}
                location="/messages"
                profileImage={profilePic}
            />
        </Card>
    );
}

export default FriendsMessageButton;