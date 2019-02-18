const jwt = require('jsonwebtoken');
const LocalStorage = require("node-localstorage").LocalStorage;
const localStorage = new LocalStorage("./scratch");

const verifyToken = (req, res, next) => {
    let token = localStorage.getItem("token");
    if (token) {
        try {
            let decoded =  jwt.verify(token, "SecretStory");
            console.log(decoded);
            req._id = decoded.id;
            next();
        } catch {
            return res.status(401).send({message: "Invalid token."});
        }
    } else {
        return res.status(401).json({
            message: "Token not found",         
        })
    }

}

exports.verifyToken = verifyToken;