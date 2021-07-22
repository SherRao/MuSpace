/* eslint-disable no-undef */
const path = require("path");

module.exports = {
    webpack:
    {
        alias: {
            "@src": path.resolve(__dirname, "src/"),

            "@atoms": path.resolve(__dirname, "src/components/atoms/"),

            "@organisms": path.resolve(__dirname, "src/components/organisms/"),

            "@molecules": path.resolve(__dirname, "src/components/molecules/"),

            "@pages": path.resolve(__dirname, "src/pages/"),

            "@misc": path.resolve(__dirname, "src/misc/"),

            "@assets": path.resolve(__dirname, "src/assets/"),

            "@functions": path.resolve(__dirname, "src/functions/"),
        },
    },
};
