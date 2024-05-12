import User from "./User.js";

const register = async (req, res) => {
  const userData = {
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    birth: req.body.birth,
    phoneNum: req.body.phoneNum,
    password: req.body.password,
    foreign: req.body.foreign,
    isLogin: false,
  };
  console.log(req);
  // 등록
  const newUser = await User.create(userData);
  res.send("회원가입이 완료되었습니다.");
};

const login = async (req, res) => {
  const userData = {
    isLogin: true,
  };
  await User.updateOne(
    { email: req.body.email, password: req.body.password },
    userData
  );
  res.send("로그인이 완료되었습니다.");
};

export { register, login };
