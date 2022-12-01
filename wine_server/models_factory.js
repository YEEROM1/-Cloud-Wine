const mongoose = require('mongoose')
// mongodb://localhost:27017
// 121.40.40.218:27017
mongoose.connect('mongodb://121.40.40.218:27017/wine', {
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