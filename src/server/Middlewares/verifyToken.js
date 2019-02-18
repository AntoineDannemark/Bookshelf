const jwt = require('jsonwebtoken');
const LocalStorage = require("node-localstorage").LocalStorage;
const localStorage = new LocalStorage("./scratch");

exports.verifyToken = function(req, res, next) {
    let token = localStorage.getItem("token");
    if (token) {
        console.log("token =" + token);
        try {
            jwt.verify(token, "SecretStory", function(err, decoded) {
                if(err) {
                    return res.status(401).json({
                        error: err,
                        message: "Token verification failed",
                    })
                }
                console.log(decoded);
                next();
              });
        } catch {
            return res.status(401).send({message: "Invalid token."});
        }
    } else {
        return res.status(401).json({
            message: "Token not found",         
        })
    }
}