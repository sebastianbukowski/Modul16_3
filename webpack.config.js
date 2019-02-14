const path = require('path');

//webpack.config.js
module.exports = {
    entry: path.resolve(__dirname, "./src/app.js"),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    }
};