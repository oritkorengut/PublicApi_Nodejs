const dbConnect = require("./config/db");

let logRequest = (req, res, next) => {
    res.on('finish', function () {
        dbConnect.getDb()
            .collection("apiLogger")
            .insertOne({
                apiPath: `https://api.publicapis.org${req.originalUrl}`
            });
    });

    next();

}
module.exports = logRequest;