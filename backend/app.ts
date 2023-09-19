const error = require('./middlewares/error');
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/routes');
const cors = require('./middlewares/cors');

const app = express();
console.log('SERVER: STARTED')
const PORT = 3000;

app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// routes
app.use(router);
app.use(error);
app.listen(PORT);
