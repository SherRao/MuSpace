import React from "react";
import Styled from "styled-components";
import { LoginField } from "@atoms";

const StyledForm = Styled.form`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.25s ease;

`;


function LoginForm() {
    return (
        <StyledForm>
            <LoginField type="text" text="Username" placeholder="Email, or username" autofocus/>
            <LoginField type="password" text="Password" placeholder="Password" />
        </StyledForm>
    );
}

export default LoginForm;