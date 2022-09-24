var path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist', 'assets'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{

            test: /\.(js|jsx)$/,
            exclude: /(node-modules)/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                },
            },
        },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        }
        ]
    },
    // devtool: "#source-map", // Add this option for source mapping
    // devServer: {
    //     contentBase: path.join(__dirname, 'dist', 'assets')
    // }
}

