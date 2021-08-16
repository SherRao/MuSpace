import React from "react";
import Styled from "styled-components";

import { Firebase } from "@functions";
import { SectionButton } from "@atoms";
import { LoginPopUp } from "@molecules";

const Container = Styled.div`
    width: 100%;
    height: 100%;
    padding: 1em;

    margin: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    align-items: left;
    transition: all 0.25s ease;

    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
`;

const TitleDiv = Styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const StyledImg = Styled.img`
    max-width: 100%; 
    height: 13em;
    border-radius: 100%;
    padding: 0.2em;
    margin-left: 0.8em;  
`;

const StyledText = Styled.p`
    font-family: ${props => props.theme.fonts.title};
    margin: 0;
    color: ${props => props.theme.colors.black};
    font-weight: bold;
`;

const StyledTitle = Styled(StyledText)`
    font-size: ${props => props.theme.fontSizes.extraLarge};
    margin: 0em 0em 0em 1em;  
`;

const StyledSubTitle = Styled(StyledText)`
    font-size: ${props => props.theme.fontSizes.largeLarge};
    margin: 0.5em 0em 0em 0.2em; 
`;

const StyledSectionTitle = Styled(StyledText)`
    font-size: ${props => props.theme.fontSizes.large};
    margin: 0.5em 0em 0.5em 0.2em;
`;

const SectionDiv = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
`;

const SettingsDiv = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
`;



function SettingsPage() {
    const fileInputRef = React.useRef();
    const [profilePicture, setProfilePicture] = React.useState(null);
    const [userName, setUserName] = React.useState(null);
    const [isPasswordResetOpen, setPasswordResetOpen] = React.useState(false);
    const [isDeleteOpen, setDeleteOpen] = React.useState(false);

    React.useEffect(async () => {
        if(!userName)
            setUserName(await Firebase.getUsername());

        if(!profilePicture)
            setProfilePicture(await Firebase.getProfilePicture());

    }, []);

    return (
        <Container>
            <TitleDiv>
                <StyledImg src={profilePicture} alt="Profile image" />
                <StyledTitle>{userName}</StyledTitle>
            </TitleDiv>
            
            <SettingsDiv>
                <StyledSubTitle>Settings</StyledSubTitle>

                <SectionDiv>
                    <StyledSectionTitle>Account Settings</StyledSectionTitle>
                    <SectionButton text="Upload Profile Picture" type="text" onClick={()=>fileInputRef.current.click()}/>
                    <input type="file" id="fileButton" ref={fileInputRef} onChange={fileChangedHandler} hidden/>
                    <SectionButton text="Change Password" type="text" onClick={() => setPasswordResetOpen(!isPasswordResetOpen)} />
                    <SectionButton text="Delete Account" type="text" onClick={() => setDeleteOpen(!isDeleteOpen)} />
                    
                    <SectionButton text="Logout" type="text" onClick={Firebase.logout}/>
                </SectionDiv>

                <SectionDiv>
                    <StyledSectionTitle>Display Settings</StyledSectionTitle>
                    <SectionButton text="Light Mode" type="text" onClick={notImplemented}/>
                    <SectionButton text="Dark Mode" type="text" onClick={notImplemented}/>
                </SectionDiv>

                <SectionDiv>
                    <StyledSectionTitle>Language Settings</StyledSectionTitle>
                    <SectionButton text="English" type="text" onClick={notImplemented}/>
                    <SectionButton text="French" type="text" onClick={notImplemented}/>
                </SectionDiv>
                
            </SettingsDiv>
            {isPasswordResetOpen ?  <LoginPopUp isOpen={isPasswordResetOpen} setIsOpen={setPasswordResetOpen} onSubmit={resetPassword} title="Change Password" action="Save" /> : null}
            {isDeleteOpen ?  <LoginPopUp isOpen={isDeleteOpen} setIsOpen={setDeleteOpen} onSubmit={deleteAccount} title="Confirm Account Deletion" action="Confirm Deletion" /> : null}

        </Container>
    );
}

async function fileChangedHandler(event) {
    const file = event.target.files[0];
    if (file) {
        if(file.size > 5000000) {
            alert("File is too large.");
        
        } else {
            await Firebase.updateProfilePicture(file);
            window.location.href = "/settings";
            alert("Your profile picture has been changed successfully!");

        }

    } else
        alert("Invalid file! Please try again!");
}

function resetPassword(event) {
    event.preventDefault();
    // const email = event.target.elements[0].value;
    // const pass = event.target.elements[1].value;

    // Firebase.resetPassword(email, pass);
    notImplemented();
}

function deleteAccount(event) {
    event.preventDefault();
    // const email = event.target.elements[0].value;
    // const pass = event.target.elements[1].value;

    //Firebase.deleteAccount(email, pass);
    notImplemented();
}

function notImplemented() {
    alert("This feature has not been implemented yet!");
}

// eslint-disable-next-line
function checkYourEmail() {
    alert("Change Password Email has been sent, please check it!");
}

export default SettingsPage;