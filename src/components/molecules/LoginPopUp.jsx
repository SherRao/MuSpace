import React from "react";
import Styled from "styled-components";

import { LoginField, TextButton } from "@atoms";

const StyledForm = Styled.form`
    position: fixed;
    top: 0;
    left: 0;
    padding: 3em;
    margin-left: 40%;
    margin-top: 5%;

    display: inline-flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.25s ease;
    background: white;
    border-radius: 10px;
    border: 2px solid black;
`;

function LoginPopUp({onSubmit, isOpen}) {
    return (
        <StyledForm onSubmit={onSubmit}>
            <LoginField name="email" type="text" text="Username" placeholder="Email Address" autofocus/>
            <LoginField name="password" type="password" text="Password" placeholder="Password" />
            <TextButton text="Log in" type="submit"/>
            <TextButton text="Close"/>
        </StyledForm>
    );
}

export default LoginPopUp;