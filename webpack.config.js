const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const DIST_DIR = path.resolve(__dirname, 'public');
const SRC_DIR = path.resolve(__dirname, 'src');

const BrowserSyncPluginConfig = new BrowserSyncPlugin({
    host: 'localhost',
    port: 3000,
    proxy: 'http://localhost:8080/',
    reload: false
});

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html'
});

const config = {
    mode: 'development',
    entry: SRC_DIR + '/app/',
    output: {
        path: DIST_DIR,
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [{ loader: 'babel-loader' }]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    { loader: 'file-loader',
                        options: {
                            outputPath: 'assets/'
                        }
                    }
                ]
            }
        ]
    },
    
    resolve: {
        extensions: ['.js', '.jsx', 'css']
    },

    devServer: {
        contentBase: path.join(DIST_DIR)
    },

    plugins: [
        BrowserSyncPluginConfig,
        HTMLWebpackPluginConfig
    ]
};

module.exports = config;