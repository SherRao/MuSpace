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
        lightGrey: "#D4D4D4"
        muSpacePurple: "#8162FF",
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
        medium: "2em",
        large: "3em",
    },

    misc: {
        shadowOpacity: "0.3",
    }
};

function Theme({children}) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );

}

export default Theme;
