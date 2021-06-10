const path = require("path");
module.exports =
{
    webpack:
    {
        alias: {
            "@atoms":
                path.resolve(
                    __dirname,
                    "src/components/atoms/"
                ),

            "@organisms":
                path.resolve(
                    __dirname,
                    "src/components/organisms/"
                ),

            "@molecules":
                path.resolve(
                    __dirname,
                    "src/components/molecules/"
                ),

            "@pages":
                path.resolve(
                    __dirname,
                    "src/pages/"
                ),

            "@misc":
                path.resolve(
                    __dirname,
                    "src/misc/"
                ),
        },
    },
};
