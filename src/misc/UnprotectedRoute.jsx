import React, { Component } from "react";
import Styled from "styled-components";
import { Route, Redirect } from "react-router-dom";

const Center = Styled.div`
    width: 100%;
    min-height: 100vh;
    height: max-content;
    
    display: flex;
    align-items: center;
    justify-content: center;

    position: sticky;
    background-color: ${props => props.theme.colors.black};
`;

function UnprotectedRoute({ component, isLoading, isLoggedIn, isVerified, ...rest }) {
    if(isLoading) {
        return (<div>Loading...</div>);
        
    }
    else {
        const Component = component;
        if (isLoggedIn && isVerified) {
            return (
                <Route {...rest}>
                    <Redirect to="/home"/>
                </Route>
            );
                
        } else if(isLoggedIn) {
            return (
                <Route {...rest}>
                    <Redirect to="/verify"/>
                </Route>
            );
            
        } else {
            return (
                <Route {...rest}>
                    <Center>
                        <Component />
                    </Center>
                </Route>
            );
        }
    }
}

export default UnprotectedRoute;