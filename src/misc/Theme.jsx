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
        small: "1em",
        smallMedium: "1.33em",
        kindaMed: "1.5em", // Change this please bro wtf is this
        mediumSmall: "1.66em",
        medium: "2em",
        mediumMedium: "2em",
        mediumLarge: "2.33em",
        largeMedium: "2.66em",
        large: "3em",
    },
};

function Theme({ children }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;
