// Remplacer par ENV
const TOKEN_SECRET = "Y0U-W1ll-D13-1F-Y0U-R3@4D-TH1S-T3RR1BL3-S3CR3T-@?!#·/<?#";

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (bearerHeader.startsWith("Bearer")) {
        const token = bearerHeader.split(" ")[1];
        if (!token)
            return res.status(401).send({message: 'Token must be provided.'});
        jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
            if (err)
                return res.status(401).send({message: 'Invalid token.'});
            else {
                if (
                    Token.findOne(
                        {
                            token: token
                        },
                    )
                ) {
                    req.userId = decoded.userId;
                    next();
                } else {
                    return res.status(401).send({message: 'Token Out of Date'});
                }
            }
        });
    } else {
        return res.status(401).send({message: 'Bearer token must be provided.'});
    }
}

module.exports = verifyToken;