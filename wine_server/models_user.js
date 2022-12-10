const mongoose = require('mongoose')
// mongodb://localhost:27017
// 121.40.40.218:27017
mongoose.connect('mongodb://47.108.116.119:27017/wine', {
    useNewUrlParser: true
})
    .then(() => console.log('user数据库连接成功...'))
    .catch(err => console.log(err, 'user数据库连接失败...'));

const UserSchema = new mongoose.Schema({
    "username": {
        type: String,
        unique: true
    },
    "password": {
        type: String,
        set(val) {
            return require('bcryptjs').hashSync(val, 10)
        }
    }
})

const User = mongoose.model('User', UserSchema, "users")
// User.db.dropCollection('users')
module.exports = { User }