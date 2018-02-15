import express from 'express';
import path from 'path';
import chalk from 'chalk';
//import open from 'open';
import middleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(middleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function (req, res) {
  console.log(chalk.red('get..'));
  res.sendFile(path.join(__dirname,'../src/index.html'))
});

app.listen(port, function (err) {
  if(err) {
    console.log(err);
  } else {
    console.log(chalk.red('Listen...'));
    //open('http://localhost:' + port);
  }
});
