const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const getProcess = require('./routes/db_getProcess');
const getFeature = require('./routes/db_getFeature');
const wProcess = require('./routes/db_wProcess');
const getFactory = require('./routes/db_getFactory');
const getHome = require('./routes/getHome');
const getImage = require('./routes/getImage');
const login = require('./routes/db_regLogin');
const app = express();

app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  req.method == "OPTIONS" ? res.send(200) : next()
})

app.use(express.static('/public/images'));
app.use('/public', express.static('public'));
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());

//请求渲染页面数据
app.use('/api/getProcess', getProcess);
app.use('/api/getFeature', getFeature);
app.use('/api/getFactory', getFactory);
app.use('/api/getHome', getHome);
app.use('/api/getImage', getImage);


/*------------- 工艺数据------------*/

app.use('/wProcess', wProcess);

/* --------------登录------------- */
app.use('/api', login);

/*---------------监听--------------*/
app.listen(8000, () => {
  console.log("http://121.40.40.218:8000");
})

module.exports = app;