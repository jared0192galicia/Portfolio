require('dotenv').config();
const path = require('path');
const { NODE_ENV = 'production' } = process.env;
const nodeExternals = require('webpack-node-externals');

const plugins = [];

module.exports = {
 watch: NODE_ENV === 'development',
 entry: './src/app/page.tsx',
 mode: NODE_ENV,
 target: 'node',
 output: {
  path: path.resolve(__dirname, 'build'),
  filename: 'index.js'
 },
 resolve: {
  extensions: ['.ts', '.js', '.tsx', '.jsx']
 },

 plugins: plugins,
 module: {
  rules: [
   {
    test: /\.ts$/,
    use: ['ts-loader']
   }, 
   {
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    use: {
     loader: 'ts-loader',
    },
   },
   {
    test: /\.json$/,
    loader: 'json-loader',
    type: 'javascript/auto'
   }
  ]
 },
 externals: [nodeExternals()]
};
