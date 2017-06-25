var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://<jitendra>:<jitendra>@ds137882.mlab.com:37882/todoapp'||'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
