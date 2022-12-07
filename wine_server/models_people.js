const mongoose = require('mongoose')
// mongodb://localhost:27017
// 121.40.40.218:27017
mongoose.connect('mongodb://121.40.40.218:27017/wine', {
    useNewUrlParser: true
})
    .then(() => console.log('people_detail数据库连接成功...'))
    .catch(err => console.log(err, 'people_detail数据库连接失败...'));

const childScchema = new mongoose.Schema({
    name: String,
    job: String,
    profile: String,
    context: String
})

const peopleSchema = new mongoose.Schema({
    job: String,
    id: Number,
    people: [childScchema],
})

const People_detail = mongoose.model('People_detail', peopleSchema, 'people_detail')
module.exports = { People_detail }