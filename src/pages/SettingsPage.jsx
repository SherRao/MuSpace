import React from "react";
import Styled from "styled-components";
import default_profile from "../assets/default_profile.jpg";

import { SectionButton } from "@atoms";
import { Firebase } from "@functions";
import { useRef } from "react";

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

const StyledTitle = Styled.p`
    font-size: ${props => props.theme.fontSizes.extraLarge};
    margin: 0em 0em 0em 1em;  
`;

const StyledSubTitle = Styled.p`
    font-size: ${props => props.theme.fontSizes.largeLarge};
    margin: 0.5em 0em 0em 0.2em; 
`;

const StyledSectionTitle = Styled.p`
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
    margin: 0m 0em 0em 0em;
`;


function SettingsPage() {
    const fileInputRef = useRef();
    
    const fileChangedHandler = async (event) => {
        const file = event.target.files[0];
        if (file){
            await Firebase.updateProfilePicture(file);
            console.log(file);
            window.location.href = "/settings";

        }
    }
    
    return (
        <Container>
            <TitleDiv>
                <StyledImg src={default_profile} alt="Default Profile image" />
                <StyledTitle>
                    <StyledText>@SherRawrXD</StyledText>
                </StyledTitle>
            </TitleDiv>
            
            <SettingsDiv>
                <StyledSubTitle>
                    <StyledText>Settings</StyledText>
                </StyledSubTitle>

                <SectionDiv>
                    <StyledSectionTitle>
                        <StyledText>Account Settings</StyledText>
                    </StyledSectionTitle>
                    <SectionButton text="Upload Profile Picture" type="text" onClick={()=>fileInputRef.current.click()}/>
                    <input type="file" id="fileButton" ref={fileInputRef} onChange={fileChangedHandler} hidden/>
                    <SectionButton text="Change Password" type="text" onClick={Firebase.changePass}/>
                    <SectionButton text="Delete Account" type="text" onClick={Firebase.deleteAccount}/>
                    <SectionButton text="Logout" type="text" onClick={Firebase.logout}/>
                </SectionDiv>

                <SectionDiv>
                    <StyledSectionTitle>
                        <StyledText>Display Settings</StyledText>
                        <SectionButton text="Light Mode" type="text" onClick={notImplemented}/>
                        <SectionButton text="Dark Mode" type="text" onClick={notImplemented}/>
                        <StyledText>Language Settings</StyledText>
                        <SectionButton text="English" type="text" onClick={notImplemented}/>
                        <SectionButton text="French" type="text" onClick={notImplemented}/>
                    </StyledSectionTitle>
                </SectionDiv>
                
            </SettingsDiv>

        </Container>
    );
}

function notImplemented() {
    alert("This feature has not been implemented yet!");
}

export default SettingsPage;