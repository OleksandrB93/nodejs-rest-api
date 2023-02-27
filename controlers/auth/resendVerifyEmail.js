const { User } = require("../../schemas/schemas");
const { BadRequest } = require("http-errors");
const { sendEmail } = require("../../helpers");

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw BadRequest("missing required field email");
  }
  if (user.verify) {
    throw BadRequest("Verification has already been passed");
  }
  const mail = {
    to: email,
    subject: "Подтвердження email",
    html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${user.verificationToken}" >Натисніть email</a>`,
  };
  await sendEmail(mail);
  res.json({
    message: "Verification email sent",
  });
};

module.exports = resendVerifyEmail;