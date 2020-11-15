const express = require('express');
const bodyParser = require('body-parser');

const { loginRoute } = require('./routes');
const { errorHandler } = require('./middlewares');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/user', loginRoute);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
