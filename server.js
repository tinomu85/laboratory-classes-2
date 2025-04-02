const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./utils/logger');
const productRoutes = require('./routing/product');
const logoutRoutes = require('./routing/logout');
const killRoutes = require('./routing/kill');
const homeRoutes = require('./routing/home');
const { STATUS_CODE } = require('./config');
const config = require('./config');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log(logger.getInfoLog(req));
  next();
})

app.use('/product', productRoutes);
app.use('/logout', logoutRoutes);
app.use('/kill', killRoutes);
app.use('/', homeRoutes);

app.use((req, res) => {
  res.status(STATUS_CODE.NOT_FOUND);
  res.sendFile(path.join(__dirname, 'views', '404.html'));
  console.log(logger.getErrorLog(new Error(`404 Not Found: ${req.originalUrl}`)));
});

app.listen(config.PORT, () => {
  console.log(`Serwer nasłuchuje na porcie ${config.PORT}`);
});