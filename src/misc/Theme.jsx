import React from "react";
import { ThemeProvider } from "styled-components";

const theme =
{
    colors: {
        black: "#000000",
        white: "#FFFFFF",
        lightBlue: "#00C2FF",
        pink: "#B10DFF",
        darkBlue: "#536EFF",
        purple: "#6D48FF",
    },

    fonts: {
        text: "Roboto",
        title: "Roboto",
        header: "Comic Sans MS",
    },

    fontSizes:
    {
        small: "1em",
        medium: "2em",
        large: "3em",
    },
};

const Theme =
    ({
        children,
    }) => (
        <ThemeProvider
            theme={
                theme
            }>
            {
                children
            }
        </ThemeProvider>
    );

export default Theme;
