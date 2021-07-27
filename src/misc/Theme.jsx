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
        lightPurple: "##E6DFFF"
    },

    fonts: {
        text: "Roboto",
        title: "Roboto",
        subTitle: "Roboto",
        header: "Roboto",
    },

    fontSizes: {
        small: "0.4rem",
        smallMedium: "0.6rem",
        kindaMed: "0.5rem", // Change this please bro wtf is this
        mediumSmall: "0.84rem",
        medium: "1rem",
        mediumMedium: "1rem",
        mediumLarge: "1.2rem",
        largeMedium: "1.4rem",
        large: "1.8rem",
    },
};

function Theme({ children }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;
