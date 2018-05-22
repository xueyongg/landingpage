module.exports = {
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                include: [commonPaths.inputPath],
                loader: ['babel-loader'],
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-runtime'],
                },
                options: {
                    cacheDirectory: true,
                },
            },
        ],
        rules: [{
            test: /\.js(x)?$/,
            use: [{
                loader: 'eslint-loader'
            }],
            enforce: 'pre',
            include: SRC
        },  {
            test: /\.js(x)?$/,
            use: [{
                loader: 'babel-loader'
            }],
            include: SRC
        },  {
            test: /(\.css|\.scss)$/,
            include: SRC,
            use: ExtractTextPlugin.extract({
                use: [{
                      loader: "css-loader"
                  }, {
                      loader: "sass-loader"
                  }],
                  // use style-loader in development
                  fallback: "style-loader"
            })
          },  {
            test: /\.ico$/,
            include: SRC,
            use: [{
                loader: 'file-loader?name=[name].[ext]'
            }],
        }, 

            // this rule handles images
            {
                test: /\.jpe?g$|\.gif$|\.ico$|\.png$|\.svg$/,
                use: 'file-loader?name=[name].[ext]?[hash]'
            },

            // the following 3 rules handle font extraction
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },

            {
                test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            },
            {
                test: /\.otf(\?.*)?$/,
                use: 'file-loader?name=/fonts/[name].  [ext]&mimetype=application/font-otf'
            }
        ]
    }
}