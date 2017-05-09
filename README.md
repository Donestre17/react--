# React 环境构建

1. 项目初始化

    ` npm i webpack webpack-dev-server -g ` 全局安装webpack

    打开项目目录

    ` npm init -y ` 初始化

    ` npm i hjs-webpack --save `使用hjs-webpack，降低配置难度

    
2. 依赖安装

    - ` npm i react react-dom --save ` 安装react 

    - ` npm i babel-loader babel-core --save `安装babel用于编译

    - ` npm i babel-preset-es2015 babel-preset-react babel-preset-react-hrme --save-dev ` 安装编译方案

    - ` npm i less --save ` 安装less（也可是其他样式预处理语言，与之后的loader对应即可）

    - ` npm i css-loader less-loader postcss-loader react-hot-loader file-loader url-loader style-loader --save ` 安装各种项目需要的加载器

3. 配置书写

    1. 创建webpack.config.js ，填入以下内容

        ```
            var getConfig = require('hjs-webpack');
            module.exports = getConfig({
                //入口文件
                in:'src/app.js',
                //打包地址
                out:'public',
                //是否删除之前的打包文件
                clearBeforeBuild:true,
            })
         ```
    2. 创建 .babelrc 文件，填入以下内容
        ```
            {
                "presets": ["es2015", "react"],
                "env": {
                    "development": {
                    "presets": ["react-hmre"]
                    }
                }
            }
        ```
4. 创建入口文件

    在src目录下创建app.js，然后命令行输入 ` webpack-dev-server `，服务器开启完毕后打开浏览器，输入localhost:port，即可开始开发工作了