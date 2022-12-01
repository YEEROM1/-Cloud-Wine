const express = require('express');
const router = express.Router();
const baseImageUrl = 'http://121.40.40.218:8000/public/images/';


function createImgUrl(baseUrl, num, name, type, page = null) {
    const imgArr = [];
    let url;
    if (page === null) {
        url = baseUrl;
    } else {
        url = baseUrl + page + '/';
    }
    for (let i = 0; i < num; i++) {
        imgArr.push(url + name + (i + 1) + type);
    }
    return imgArr;
}

router.get('/home', function (req, res) {
    const imgUrl = createImgUrl(baseImageUrl, 4, "h_his_", ".jpg", "home");
    const desUrl = createImgUrl(baseImageUrl, 7, "h_des_", ".jpg", "home");
    const titleUrl = createImgUrl(baseImageUrl, 2, "h_title_", ".png", "home");
    const facUrl = createImgUrl(baseImageUrl, 2, "h_fa_", ".png", "home");
    res.json({
        imgUrl: imgUrl,
        desUrl: desUrl,
        titleUrl: titleUrl,
        facUrl: facUrl
    });
})

router.get('/app', function (req, res) {
    const bgUrl = baseImageUrl + "app_bg.jpg";
    res.json({
        bgUrl: bgUrl
    })
})

router.get('/wiki', function (req, res) {
    const jar = baseImageUrl + "w_jar.png";
    const fla_img = createImgUrl(baseImageUrl, 12, "w_p", ".png", "wiki");
    const wiki_des = createImgUrl(baseImageUrl, 8, "w_des", ".png", "wiki");
    res.json({
        jar: jar,
        fla_img: fla_img,
        wiki_des: wiki_des
    })
})

router.get('/history', function (req, res) {
    const his_img = createImgUrl(baseImageUrl, 4, "h_his_", ".jpg", "home");
    const his_des = createImgUrl(baseImageUrl, 8, "his_des", ".png", "history");
    res.json({
        his_img: his_img,
        his_des: his_des
    });
})

router.get('/factory', function (req, res) {
    const fac_img = createImgUrl(baseImageUrl, 14, "f_des", ".png", "factory");
    const logo = createImgUrl(baseImageUrl, 5, "logo", ".png", "factory");
    const p_nj = createImgUrl(baseImageUrl, 6, "p_nj", ".jpg", "factory")
    const p_lj = createImgUrl(baseImageUrl, 9, "p_lj", ".jpg", "factory")
    const p_tg = createImgUrl(baseImageUrl, 6, "p_tg", ".jpg", "factory")

    res.json({
        logo: logo,
        fac_img: fac_img,
        p_data: [
            {
                job: "酿酒",
                name: ["季克良", "赖高淮", "李大和", "李德美", "沈怡方", "宋书玉"],
                img: p_nj
            },
            {
                job: "领军",
                name: ["张雨柏", "张春昌", "胡建华", "方贵权", "熊小毛", "吴向东", "容健", "王国春", "王恭堂"],
                img: p_lj
            },
            {
                job: "推广",
                name: ["王宜文", "金炜", "赵晨", "张总结", "焦健", "罗伟忠"],
                img: p_tg
            }
        ]
    });
})

router.get('/about', function (req, res) {
    const bg = createImgUrl(baseImageUrl, 1, "ab_bg", ".jpg", "about");
    const des = createImgUrl(baseImageUrl, 2, "ab_des", ".png", "about");
    const head = createImgUrl(baseImageUrl, 1, "ab_head", ".png", "about");

    res.json({
        ab_bg: bg,
        ab_des: des,
        ab_head: head
    })
})
module.exports = router;