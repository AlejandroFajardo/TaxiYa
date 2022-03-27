const jwt = require('jsonwebtoken');
const {generateToken} =require('../middlewares/oauth/authentication');
const roles = require('../middlewares/oauth/roles');
const { authorize } = require('../middlewares/oauth/authentication');


const login = async (req, res) => {

    const { name, password } = req.body;
    let token;
    const payload = {};
    const userInfo = {};

    if (name === 'Juan' && password === '1'){
        payload.name = name;
        userInfo.name = name;
        res.status(200)
    }else {
        res.status(400).json({message: 'Nop'})
    }

    token = await generateToken(payload, userInfo);
    return res.status(200).json({token});
}
module.exports.login = [login];



const test = async (req, res) => {
    res.status(200).json({message: 'Hola json'})
}
module.exports.test = [test];
