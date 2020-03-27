const express = require('express');
const cors = require('cors');
const routes = require('./routes');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const port = process.env.APP_PORT;

app.listen(port, () => console.log('Running on port', port));
