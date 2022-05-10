const jwt = require('jsonwebtoken')
const secret_ =  process.env.SECRET

const Validate = (req, res, next)=>{

    console.log(req.headers)
    let TOKEN = req.headers.authorization
    let secret =  '-----BEGIN CERTIFICATE-----\n' + secret_ + '\n-----END CERTIFICATE-----';
    try {
        jwt.verify(TOKEN, secret);
        next()
    } catch (error) {
        console.log(error)
        return res.json(200).json({erro : true})
    }
}
module.exports = {
    Validate 
}
