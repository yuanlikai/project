var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
        res.json(
            {
                "status": 200,
                "Message": "大家好，我是头冷",
                "data": {
                    "name": "BeJson",
                    "url": "http://www.bejson.com",
                    "page": 88,
                    "isNonProfit": true,
                    "address": {"street": "科技园路.", "city": "江苏苏州", "country": "中国"},
                    "links": [{"name": "Google", "url": "http://www.google.com"}, {
                        "name": "Baidu",
                        "url": "http://www.baidu.com"
                    }, {"name": "SoSo", "url": "http://www.SoSo.com"}]
                }
            });
    }
);

module.exports = router;
