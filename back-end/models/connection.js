const { MongoClient } = require('mongodb');

const dbUrl = 'mongodb://localhost:27017/megahack5';
const dbName = 'megahack5';

const connect = () => MongoClient.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((connection) => connection.db(dbName));

module.exports = connect;
