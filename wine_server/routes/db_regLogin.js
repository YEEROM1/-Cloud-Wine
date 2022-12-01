const express = require('express');
const router = express.Router();

const { User } = require('../models_user');
const SECRET = "319849";
const jwt = require('jsonwebtoken');

//获取全部用户
router.get('/users', async (req, res) => {
    const users = await User.find();
    res.send(users);
})

//注册
router.post('/register', async (req, res) => {
    try {
        const user = await User.create({
            username: req.body.username,
            password: req.body.password
        })
        res.send(user);
    } catch (e) {
        console.log("用户名已存在");
    }
})

//登录
router.post('/login', async (req, res) => {
    const user = await User.findOne({
        username: req.body.username
    })
    if (!user) {
        return res.status(422).send({
            msg: "用户名不存在"
        })
    }
    const isPasswordValid = require('bcryptjs').compareSync(
        req.body.password,
        user.password
    )
    if (!isPasswordValid) {
        return res.status(422).send({
            msg: "密码错误"
        })
    }
    const token = jwt.sign({
        id: String(user._id)
    }, SECRET)
    res.send({
        user,
        token: token
    });
})

//中间件+token
const auth = async (req, res, next) => {
    const raw = String(req.headers.authorization).split(' ').pop();
    const tokendata = jwt.verify(raw, SECRET);
    req.user = await User.findById(tokendata.id);
    next();
}

router.get('/profile', auth, async (req, res) => {
    res.send(req.user);
})

module.exports = router;