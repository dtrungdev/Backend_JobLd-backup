import loginRegisterService from "../services/loginRegisterService";

const handleRegister = async (req, res) => {
  try {
    //req.body : fullname, email, password,

    if (!req.body.fullname || !req.body.email || !req.body.password) {
      return res.status(200).json({
        EM: "Missing required parameters", //error message
        EC: "1", //error code
        DT: "", //data
      });
    }
    if (req.body.password && req.body.password.length < 3) {
      return res.status(200).json({
        EM: "Mật khẩu phải có ít nhất 3 ký tự!", //error message
        EC: "1", //error code
        DT: "", //data
      });
    }
    //service: create user
    let data = await loginRegisterService.registerNewUser(req.body);

    return res.status(200).json({
      EM: data.EM, //error message
      EC: data.EC, //error code
      DT: "", //data
    });
  } catch (error) {
    return res.status(500).json({
      EM: "error from server", //error message
      EC: "-1", //error code
      DT: "", //data
    });
  }
};

const handleLogin = async (req, res) => {
  try {
    let data = await loginRegisterService.handleUserLogin(req.body);
    res.cookie("jwt", data.DT.access_token, {
      httpOnly: true,
      maxAge: 60 * 60 * 1000,
    });
    return res.status(200).json({
      EM: data.EM, //error message
      EC: data.EC, //error code
      DT: data.DT, //data
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "error from server", //error message
      EC: "-1", //error code
      DT: "", //data
    });
  }
};

module.exports = {
  handleRegister,
  handleLogin,
};
