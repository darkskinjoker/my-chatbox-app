module.exports = {
    // Set entry point for your application
    entry: './src/index.js',
    // Define output bundle
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    // Define rules for handling different file types
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};