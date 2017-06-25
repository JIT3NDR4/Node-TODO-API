var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://jitendra:jitendra@ds137882.mlab.com:37882/todoapp'
};
mongoose.connect(db.mlab ||db.localhost );

module.exports = {mongoose};
