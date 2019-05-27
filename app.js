const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

if (process.env.env === 'test') {
  console.log('Test Environment');
  const db = mongoose.connect('mongodb://localhost/feedbackAPI_Test')
    .catch((err) => {
      console.log(err);
    });
} else if (process.env.env === 'local') {
  console.log('Test Environment');
  const db = mongoose.connect('mongodb://localhost/feedback');
} else {
  console.log('Developement');
  const db = mongoose.connect('mongodb://uzkpy7siskbvv6pwfu3g:t0udcskNnwTOFfc69ZVA@bazkmzfsnlqcttn-mongodb.services.clever-cloud.com,bazkmzfsnlqcttn-mongodb.services.clever-cloud.com:27017/bazkmzfsnlqcttn')
    .catch((err) => {
      console.log(err);
    });
}
const port = process.env.PORT || 3000;
const Comment = require('./models/comment.model');
const commentRouter = require('./routes/comment.routes')(Comment);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/comments', commentRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the feedback API');
});

app.server = app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

module.exports = app;
