var path = require('path');
var webpack = require('webpack');

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx']
    },
    context: path.join(__dirname, 'src'),
    entry: {
        React: ['./React', './React-Router'],
        beta: ['./beta', './b', './c']
    },
    output: {
        path: path.join(__dirname, 'js'),
        filename: 'MyDll.[name].js',
        library: '[name]_[hash]'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, 'js', '[name]-manifest.json'),
            name: '[name]_[hash]'
        })
    ]
};
