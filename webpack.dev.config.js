const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
 
    /*入口*/
    entry: [
        'react-hot-loader/patch',
        path.join(__dirname, 'src/index.js'),
    ],
    
    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js'
    },
    module:{
        rules: 
        [
            {
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
            }
        ]
    },
    devServer:{
        contentBase:path.join(__dirname,'./dist'),
        port:8080,
        historyApiFallback:true
    },
    resolve:{
        alias:{
            pages:path.join(__dirname,'src/pages'),
            component:path.join(__dirname,'src/component'),
            router:path.join(__dirname,'src/router'),
        }
    },
    devtool: 'inline-source-map',
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:path.join(__dirname,'src/index.html')
        })
    ]
};