import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        black: "#000000",
        white: "#FFFFFF",
        lightBlue: "#00C2FF",
        pink: "#B10DFF",
        darkBlue: "#536EFF",
        purple: "#6D48FF",
        grey: "#404040",
        muSpacePurple: "#8162FF",
        mediumGrey: "#838383",
        lightGrey: "#D4D4D4",
    },

    fonts: {
        text: "Roboto",
        title: "Roboto",
        subTitle: "Roboto",
        header: "Roboto",
    },

    fontSizes: {
        small: "1rem",
        smallMedium: "1.33rem",
        kindaMed: "1.5rem", // Change this please bro wtf is this
        mediumSmall: "1.66rem",
        medium: "1rem",
        mediumMedium: "1rem",
        mediumLarge: "1.33rem",
        largeMedium: "1.66rem",
        large: "2rem",
    },
};

function Theme({ children }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;
