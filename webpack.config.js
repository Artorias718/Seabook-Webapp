var path = require('path'); //con npm run-script watch possono metterlo in watch mode e cambia real time, rigenera bundle.js mentre edito il code

//questo file è usato per assemblare tutto

module.exports = {
    entry: './src/main/js/app.js', //definisce il "main" del javascript
    devtool: 'sourcemaps',
    cache: true,
    mode: 'development',
    output: {
        path: __dirname,
        filename: './src/main/resources/static/built/bundle.js' //tutto il custome code mandato con le require() è messo in questo file
    },
    module: {
        rules: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }]
            }
        ]
    }
};