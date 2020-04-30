module.exports = app => {
  const mongoose = require('mongoose')
  mongoose.connect('mongodb://127.0.0.1:27017/node-vue-moba', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  // 把某个文件夹下边的js都引入一边 npm i require-all
  require('require-all')(__dirname + '/../models')
  
}