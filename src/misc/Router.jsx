import React from "react";
import { Route } from 'react-router-dom';
import { TestPage, HomePage } from '@pages';

const Router =
    () => {
        return (
            <>
                <Route exact path="/" component={TestPage} />
                <Route path="/home" component={HomePage} />

                {/* <ProtectedRoute
                    exact
                    path="/"
                    component={
                        HomePage
                    }
                />

                <ProtectedRoute
                    path="/rooms"
                    component={
                        RoomsPage
                    }
                />

                <ProtectedRoute
                    path="/explore"
                    component={
                        ExplorePage
                    }
                />

                <ProtectedRoute
                    path="/friends"
                    component={
                        FriendsPage
                    }
                />

                <ProtectedRoute
                    path="/chat"
                    component={
                        ChatPage
                    }
                /> */}

            </>
        );
    };

export default Router;
