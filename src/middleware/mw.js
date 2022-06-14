const jwt = require("jsonwebtoken")

const mw = async function (req, res, next) {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];

    if (!token) return res.send({status: false, msg:"token is not present"});
   
    console.log(token)
     let decodedToken = jwt.verify(token, "functionup-radon");
     if (!decodedToken){
        return res.send({ status: false, msg: "token is not valid"});
}
else{
    next()
}
}


module.exports.mw= mw