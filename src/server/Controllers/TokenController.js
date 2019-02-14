const Token = require("../Schemas/TokenSchema");

const store = (req, res) => {
    if (
        !req
    ) {
        res.status(400).json({
            text: "Error storing the Token",
        });
    } else {
            let _t = new Token(req);
            console.log(_t);
            _t.save(err => {
                if (err) {
                    console.log(err);
                    res.status(500).json({
                        text: "server error 500 saving Token",
                    });
                } else {
                    res.status(200).json({
                        text: "New Token Created",
                    });
                }
            });
        error => {
            switch (error) {
                case 500:
                    res.status(500).json({
                        text: "server error 500 @ token creation",
                    });
                    break;
                case 204:
                    res.status(204).json({
                        text: "server error 204 @ token creation",
                    });
                    break;
                default:
                    res.status(500).json({
                        text: "server error default_500 @ token creation",
                    });
            }
        };
    };
};

const destroy = (req, res) => {
    Token.deleteOne(
        {
            email: req.email
        }
    ),        
    (err, token) => {
        if (err) {
            return res.status(500).send(err);
        }
        const response = {
            message: "token successfully deleted",
        };
        return res.status(200).send(response);
        };
};



exports.store = store;
exports.destroy = destroy;
