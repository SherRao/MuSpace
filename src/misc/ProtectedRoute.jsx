/*                                  ProtectedRoute.js
Description:    This is kind of like an authentication checkpoint. We use this to check if the user is authenticated based on the isAuthenticated and isVerifying state variables in our redux store before rendering a given React component (like <Home />)
                Notable things that happen here:
                    -   If user exists and is authenticated render given component (like <Home />)
                    -   Otherwise redirect user to /login
                     
*/
import React from "react";
import {
    Route,
    Redirect,
} from "react-router-dom";
import DashboardWrapper from "../DashboardWrapper";
import Navbar from "../Navbar";

const ProtectedRoute =
    ({
        component:
        Component,
        isAuthenticated,
        isVerifying,
        ...rest
    }) => (
        <Route
            {...rest}
            render={(
                props
            ) =>
                isVerifying ? (
                    <div />
                ) : isAuthenticated ? (
                    <DashboardWrapper>
                        <Component
                            {...props}
                        />
                    </DashboardWrapper>
                ) : (
                    <Redirect
                        to={{
                            pathname:
                                "/login",
                            state: {
                                from: props.location,
                            },
                        }}
                    />
                )
            }
        />
    );

const ProtectedRouteEmailVerified =
    ({
        component:
        Component,
        isAuthenticated,
        isVerifying,
        emailVerified,
        ...rest
    }) => (
        <Route
            {...rest}
            render={(
                props
            ) =>
                isVerifying ? (
                    <div />
                ) : isAuthenticated &&
                    emailVerified ? (
                    <div>
                        <DashboardWrapper>
                            <Component
                                {...props}
                            />
                        </DashboardWrapper>
                    </div>
                ) : (
                    <Redirect
                        to={{
                            pathname:
                                "/",
                            state: {
                                from: props.location,
                                cantAccesEmailNotVerified: true,
                            },
                        }}
                    />
                )
            }
        />
    );

export {
    ProtectedRoute,
    ProtectedRouteEmailVerified,
};

/*
From here you can go to:
    -   Home in src/js/components/Home/index.js to see how the <Home /> component works with PR
    -   Login in src/js/components/Login/Login.js to see how Login components works
*/
