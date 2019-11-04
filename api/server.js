const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');

const mongoose = require('mongoose');
const config = require('./DB.jsx');
const businessRoute = require('./business.route.jsx');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {
    console.log('DB is connected !!');
  },
  err => {
    console.log('Cannot connect to DB ' + err);
  }
);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/business', businessRoute);

app.listen(PORT, function() {
  console.log('server is running on port : ', PORT);
});
