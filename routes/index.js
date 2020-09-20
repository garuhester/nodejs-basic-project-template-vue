//系统库
var moment = require("moment");
var fs = require('fs');
var fse = require('fs-extra');
var multer = require("multer");
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        var on = file.originalname;
        cb(null, "static/files");
    },
    filename: function (req, file, cb) {
        var on = file.originalname;
        cb(null, on);
    }
});

var upload = multer({
    storage: storage
}).any();

//数据库映射对象
var User = require("../schemas/User")

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });

    // #region 页面

    //首页
    app.get("/index", function (req, res) {
        res.render("public", {
            result: "index"
        })
    })

    // #endregion 页面

    //--------------------------------------------------

    // #region 接口

    //上传swagger文件
    app.post("/newSwaggerFile", function (req, res) {
        upload(req, res, function (err) {
        });
    });

    // #endregion 接口

    //--------------------------------------------------

    //404页面
    app.get("*", function (req, res) {
        res.render("404");
    });
}