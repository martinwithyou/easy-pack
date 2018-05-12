module.exports.var = {
    hotMiddlewareScript : "webpack-hot-middleware/client?reload=true",
    path : "<%require('path')%>",
    ROOT : "<%path.resolve(__dirname, '../')%>",
    HtmlWebpackPlugin : "<%require('html-webpack-plugin')%>",
}


module.exports.config = {
    devtool: 'cheap-module-eval-source-map',

    entry: {
        index: ["babel-polyfill", "./src/index.js"]
    },
    output: {
        path: "<%path.resolve(ROOT, 'dev')%>",
        filename: '[name].[chunkhash:5].js',
        publicPath: '/'
    },
    resolve: {
        extensions: [".jsx", ".js", ".tsx", ".ts"],
        alias: {
            src: "<%path.resolve(ROOT, 'src')%>",
            components: "<%path.resolve(ROOT, 'src/components')%>",
            containers: "<%path.resolve(ROOT, 'src/containers')%>",
            assets: "<%path.resolve(ROOT, 'src/assets')%>",
            routers: "<%path.resolve(ROOT, 'src/routers')%>",
        }
    },
    externals: {},
    plugins: [
        "<%new HtmlWebpackPlugin({\
            filename: 'index.html',\
            template: './src/index.html',\
            inject: 'body',\
            chunks: ['index']\
        })%>",
    ]
}