import User from "../models/UsersModel.js";

// verifyUser ketika login apakah role 'admin' or 'users'
export const verifyUser = async (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).json({ msg: "Mohon login ke akun anda!" });
  }
  const user = await User.findOne({
    where: {
      uuid: req.session.userId,
    },
  });
  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
  req.userId = user.isSoftDeleted;
  req.role = user.role;
  next();
};
