import React from "react";
import Styled from "styled-components";
import { Redirect } from "react-router-dom";

import { Firebase } from "@functions";
import { LoginField, TextButton } from "@atoms";

const StyledForm = Styled.form`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.25s ease;

`;

function LoginForm() {
    function submit(event) {
        const email = event.target.elements[0].value;
        const pass = event.target.elements[1].value;
        Firebase.auth.signInWithEmailAndPassword(email, pass);

    }

    return (
        <StyledForm onSubmit={submit}>
            <LoginField name="email" type="text" text="Username" placeholder="Email, or username" autofocus/>
            <LoginField name="password" type="password" text="Password" placeholder="Password" />
            <TextButton text="Log in" type="submit"/>
        </StyledForm>
    );
}

export default LoginForm;