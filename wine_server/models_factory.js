const mongoose = require('mongoose')
// mongodb://localhost:27017
mongoose.connect('mongodb://47.108.116.119:27017/wine', {
    useNewUrlParser: true
})
    .then(() => console.log('factory数据库连接成功...'))
    .catch(err => console.log(err, 'factory数据库连接失败...'));

const factorySchema = new mongoose.Schema({
    name: String,
    honor: [Array],
})

const Factory = mongoose.model('Factory', factorySchema, 'factory')
module.exports = { Factory }