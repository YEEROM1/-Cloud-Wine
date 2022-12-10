const mongoose = require('mongoose')
// mongodb://localhost:27017
// 121.40.40.218:27017
mongoose.connect('mongodb://47.108.116.119:27017/wine', {
    useNewUrlParser: true
})
    .then(() => console.log('process数据库连接成功...'))
    .catch(err => console.log(err, 'process数据库连接失败...'));

const linkSchema = new mongoose.Schema({
    start: String,
    end: String,
    process: [String]
})

const stepsSchema = new mongoose.Schema({
    steps: [String],
    main: [String],
    otext: {
        tips: {
            step: [String],
            supply: [String]
        },
        link: [linkSchema]
    }
})

const ProcessSchema = new mongoose.Schema({
    id: Number,
    flavor: String,
    steps: [stepsSchema],
    click: {
        node: [String],
        describe: [String]
    }
})

const Process = mongoose.model('Process', ProcessSchema, 'process')
module.exports = { Process }