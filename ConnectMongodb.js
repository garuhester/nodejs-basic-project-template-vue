function connect() {
    let mongoose = require('mongoose');
    // mongoose.set('useFindAndModify', false)
    let DB_HOST = process.env.MONGO_HOST || "localhost";
    let DB_PORT = process.env.MONGO_PORT || 27017;
    let DB_URL = "mongodb://"+DB_HOST+":"+DB_PORT+"/mock-maker";
    //connect mongodb
    mongoose.Promise = global.Promise;
    mongoose.connect(DB_URL);

    //mongodb status
    mongoose.connection.on('connected', function () {
        console.log("mongodb connected success");
    });
    mongoose.connection.on('error', function (err) {
        console.log("mongodb connected error " + err);
        process.exit();
    });
    mongoose.connection.on('disconnected', function () {
        console.log("mongodb disconnected");
    });
}

module.exports = {
    connect,
};