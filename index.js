var express = require('express');
const path = require('path');
const app = express();
var logger = require('morgan');
require('dotenv').config()

// console.log(process.env.password);
/* GET home page. */
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

const PORT = process.argv[3] || 8080;
const HOST = process.argv[2] || '0.0.0.0';
app.listen(PORT, HOST, () => {
  console.log(`Server is running on port ${HOST} ${PORT}.`);
});
