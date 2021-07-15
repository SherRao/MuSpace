import React from "react";
import Styled from "styled-components";

import { LoginField, TextButton } from "@atoms";

const StyledForm = Styled.form`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.25s ease;

`;

function LoginForm({onSubmit}) {
    return (
        <StyledForm onSubmit={onSubmit}>
            <LoginField name="email" type="text" text="Username" placeholder="Email, or username" autofocus/>
            <LoginField name="password" type="password" text="Password" placeholder="Password" />
            <TextButton text="Log in" type="submit"/>
        </StyledForm>
    );
}

export default LoginForm;