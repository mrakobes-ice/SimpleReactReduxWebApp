const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        main: [
            path.resolve('./frontend/index.jsx')
        ]
    },
    output: {
        path: path.resolve('./frontend/public/'), 
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|backend|frontend\/public)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [ '@babel/preset-env' ],
                            plugins: [ "@babel/plugin-proposal-class-properties" ]
                        }
                    }
                ]
            },
            {
                test: /\.jsx$/,
                exclude: /(node_modules|backend|frontend\/public)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [ '@babel/preset-env', '@babel/preset-react' ],
                            plugins: [ "@babel/plugin-proposal-class-properties" ]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: true,
                            reloadAll: true
                        }
                    }, 
                    'css-loader'
                ]               
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: true,
                            reloadAll: true
                        }
                    }, 
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'fonts/'
                    }
                  }
                ]
            }
        ]
    },
    resolve: {
        alias: {}
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].bundle.css'
        })
    ]
}