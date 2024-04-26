import db from "../models/index";

const getRoles = async (user) => {
  let roles = await db.User.findOne({
    where: { roleId: user.roleId },
  });
  return roles ? roles : {};
};

module.exports = {
  getRoles,
};
