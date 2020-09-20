var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//用户表
var UserSchema = new Schema({
    //姓名
    name: String,
    //创建时间
    createTime: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);