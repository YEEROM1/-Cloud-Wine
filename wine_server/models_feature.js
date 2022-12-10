const mongoose = require('mongoose')
// mongodb://localhost:27017
// 121.40.40.218:27017
mongoose.connect('mongodb://47.108.116.119:27017/wine', {
    useNewUrlParser: true
})
    .then(() => console.log('feature数据库连接成功...'))
    .catch(err => console.log(err, 'feature数据库连接失败...'));

const featureSchema = new mongoose.Schema({
    id: Number,
    name: String,
    feature: String,
})

const Feature = mongoose.model('Feature', featureSchema, 'feature')
module.exports = { Feature }