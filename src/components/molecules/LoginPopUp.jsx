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
    border: 1px solid black;

    animation-duration: 0.5s;
    animation-name: slidein;

    @keyframes slidein {
        from {
          margin-left: 100%;
          
        }
        to {
          margin-left: 40%;
          
        }
      }
`;

const Field = Styled(LoginField)`
    color: ${props => props.theme.colors.black};
`;

function LoginPopUp({isOpen, setIsOpen, onSubmit}) {
    return (
        <StyledForm onSubmit={onSubmit}>
            <h3>Confirm Account Deletion</h3>
            <Field name="email" type="text" text="Username" placeholder="Email Address" autofocus/>
            <Field name="password" type="password" text="Password" placeholder="Password" />
            <TextButton text="Log Confirm" type="submit"/>
            <TextButton text="Close" onClick={() => setIsOpen(!isOpen)}/>
        </StyledForm>
    );
}

export default LoginPopUp;