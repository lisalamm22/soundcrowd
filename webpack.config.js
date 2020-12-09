const path = require("path");

module.exports = {
    entry: "./frontend/sound_crowd.jsx",
    output: {
        path: path.resolve(__dirname, "app", "assets", "javascripts"),
        filename: "bundle.js",
    },
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".jsx", "*"],
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/],
                exclude: /(node_modules)/,
                loader: "babel-loader",
                query: {
                    presets: ["@babel/env", "@babel/react"],
                },
            },
            { 
                test: /(\.css$)/, 
                loaders: ['style-loader', 'css-loader', 'postcss-loader'] 
            }, 
            { 
                test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
                loader: 'url-loader?limit=100000' 
            }
        ],
    },
};
