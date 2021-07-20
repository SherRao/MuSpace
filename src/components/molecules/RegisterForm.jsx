import React from "react";
import Styled from "styled-components";
import { TextButton, RegisterField } from "@atoms";

const StyledForm = Styled.form`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.25s ease;
    width: 27%

`;

const StyledHeader = Styled.h3`
    color: ${props => props.theme.colors.lightBlue};
    font-size: ${props => props.theme.fontSizes.small};
    margin-bottom: -0.7em;
    padding-bottom: 0.5em;
    align-content: left;
`;

function RegisterForm({onSubmit}) {
    return (
        <StyledForm onSubmit={onSubmit}>
            <RegisterField type="text" text="Enter Email" placeholder="Email" autofocus/>
            <RegisterField type="text" text="Confirm Email" placeholder="Confirm Email" autofocus/>
            <RegisterField type="text" text="First Name" placeholder="First Name"autofocus/>
            <RegisterField type="text" text="Last Name" placeholder="Last Name" autofocus/>
            <RegisterField type="text" text="Enter Username" placeholder="Username" autofocus/>
            <RegisterField type="password" text="Password" placeholder="Password" />
            <StyledHeader>Date of Birth</StyledHeader>
            <RegisterField type="date" text="DOB" placeholder="DOB" autofocus/>
            <TextButton text="Register" type="submit"/>
        </StyledForm>
    );
}

export default RegisterForm;