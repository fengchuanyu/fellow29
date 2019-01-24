const path = require('path');
const webpack = require("webpack");
const htmlPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const glob = require("glob");
const purifyCSSPlugin = require("purifycss-webpack");
const entry = require("./webpack_config/enty_webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports={
  mode:"development",
  entry:entry,
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:"[name].js",
    publicPath:"http://127.0.0.1:8081/"
  },
  module:{
    rules:[
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{
            loader:"css-loader",
            options: { importLoaders: 1 }
          },"postcss-loader"]
        })
      },
      {
        test:/\.(png|jpg|gif)$/,
        use:[{
          loader:"url-loader",
          options:{
            limit:500,
            outputPath:'./img/'
          }
        }]
      },{
        test:/\.(html|htm)/i,
        loader:'html-withimg-loader'
      },{
        test:/\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use:[
            {loader:"css-loader"},
            {loader:"sass-loader"}
          ]
        })
      },{
        test:/\.(jsx|js)$/,
        use:
          {
            loader:"babel-loader",
            options:{
              presets:[
                "env","react"
              ]
            }
          },
        exclude:/node_modules/
      }
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new htmlPlugin({
      minify:{
        removeAttributeQuotes:true,
        collapseWhitespace:false
      },
      hash:true,
      template:"./src/index.html"
    }),
    new ExtractTextPlugin("./css/main.css"),
    new purifyCSSPlugin({
      paths:glob.sync(path.resolve(__dirname,'src/*.html'))
    }),
    new webpack.BannerPlugin("唯创网讯"),
    new webpack.ProvidePlugin({
      $:"jquery"
    }),
    new CopyWebpackPlugin([{
      from:__dirname+"/src/public",
      to:'./public'
    }])
  ],
  devServer:{
    contentBase: path.resolve(__dirname,'dist'),
    host:"127.0.0.1",
    compress:true,
    port:"8081",
    hot:true,
    open:true
  }
}