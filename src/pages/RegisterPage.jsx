import React from "react";
import Styled from "styled-components";
import { Redirect } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import { MuspaceLogo } from "@atoms";
import { RegisterForm } from "@molecules";

import { Firebase } from "@functions";
// eslint-disable-next-line no-undef
require("firebase/auth");

const Container = Styled.div`
    width: 100vw;
    height: 100vh;
    padding: 5em;

    margin: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: inline-flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.25s ease;
    background-color: ${props => props.theme.colors.black};

    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
`;

const Header = Styled.h3`
    color: ${props => props.theme.colors.lightBlue};
    font-size: ${props => props.theme.fontSizes.medium};
    margin-bottom: -0.5em;
    padding-bottom: 0.5em;

`;

function RegisterPage() {
    const [user] = useAuthState(Firebase.firebase.auth());
    if(user)
        return (<Redirect to="/home"/>);

    return (
        <Container>
            <MuspaceLogo width="25em"/>
            <Header>Create Your Account</Header>
            <RegisterForm onSubmit={registerWithEmail}/>
        </Container >
    );
}

async function registerWithEmail(event) {
    event.preventDefault();

    const email = event.target.elements[0].value;
    const confirmEmail = event.target.elements[1].value;
    const firstName = event.target.elements[2].value;
    const lastName = event.target.elements[3].value;
    const username = event.target.elements[4].value;
    const pass = event.target.elements[5].value;
    const dob = event.target.elements[6].value;

    Firebase.auth.createUser({
        email: email,
        emailVerified: true,
        phoneNumber: "+11234567890",
        password: pass,
        displayName: username,
        photoURL: "http://www.example.com/12345678/photo.png",
        disabled: false,

    }).then((userCredential) => {
        console.log(userCredential);
        storeNewUserData(userCredential.uid, email, firstName, lastName, dob);

    }).catch((error) => {
        var errorMessage = error.message;
        alert(errorMessage);
        
    } );
}

async function storeNewUserData(id, email, firstName, lastName, dob) {
    const userData = {
        "email": email,
        "firstName": firstName,
        "lastName": lastName,
        "dob": dob
    };

    await Firebase.firestore.collections("user")
        .doc(id).set(userData);

}

export default RegisterPage;