const jwt = require("jsonwebtoken");
function authenticator(req, res, next) {
    const token = req.headers.authorization;

 jwt.verify(token, "saurabh", (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Token is not valid, please login",
                status: 2
            });
        }

        req.body.user = decoded.userId;
        next();
    });
}

module.exports = { authenticator };
