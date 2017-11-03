var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        example: './src/example'
    },
    output: {
        path: path.join(__dirname, 'js'),
        filename: 'output.js'
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: path.join(__dirname, 'src'),
            manifest: require("./js/React-manifest.json") // eslint-disable-line
        }),
        new webpack.DllReferencePlugin({
            scope: 'beta',
            manifest: require("./js/beta-manifest.json"), // eslint-disable-line
            extensions: ['.js', '.jsx']
        })
    ]
};
