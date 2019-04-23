const path = require('path');
const webpack = require('webpack');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {

    entry: './index.js',
    output:{
        filename: 'index.js',
        path: path.resolve(__dirname, '../dist'),
    },
    module:{

        rules:[
            {
                test: /\.(js)$/,
                loader: 'babel-loader',
                exclude: [/node_modules/],
                include: path.resolve(__dirname , '../src'),
            }
        ]

    },
    plugins:[
        new cleanWebpackPlugin(),
    ]


}