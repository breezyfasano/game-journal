const path = require('path')
 
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/ 
        }]
    }
}