const mongoose = require('mongoose')
// mongodb://localhost:27017
// 121.40.40.218:27017
mongoose.connect('mongodb://121.40.40.218:27017/wine', {
    useNewUrlParser: true
})
    .then(() => console.log('wine_detail数据库连接成功...'))
    .catch(err => console.log(err, 'wine_detail数据库连接失败...'));

const wineSchema = new mongoose.Schema({
    id: Number,
    name: String,
    wine: String,
    context: String
})

const Wine_detail = mongoose.model('Wine_detail', wineSchema, 'wine_detail')
module.exports = { Wine_detail }