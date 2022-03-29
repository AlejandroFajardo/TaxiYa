const jwt = require("jsonwebtoken");
const { generateToken } = require("../middlewares/oauth/authentication");
const roles = require("../middlewares/oauth/roles");
const { authorize } = require("../middlewares/oauth/authentication");
const users = require("../model/Users");

const login = async (req, res) => {
  const { username, pass } = req.body;
  console.log(req.body);
  const user = await users.users.find({ userName: username });
  if (user.length !== 0) {
    if (user[0].password == pass) {
      if (user[0].firtsLog == true) {
        res.send("welcome");
      } else {
        res.send("preop");
      }
    } else {
      res.send("error de contraseña");
    }
  } else {
    res.send("No existe el usuario");
  }
};
module.exports.login = [login];

const test = async (req, res) => {
  res.status(200).json({ message: "Hola json" });
};
module.exports.test = [test];
