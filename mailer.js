const mailer = require("nodemailer")
require("dotenv").config()

const EMAIL = process.env.EMAIL
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD

function sendEmail(email, subject, body, callback) {
  // create transport
  const transport = mailer.createTransport({
    service: "gmail",
    sercure: false,
    auth: {
      user: EMAIL,
      pass: EMAIL_PASSWORD,
    },
  })
  //verify
  transport.verify((error, success) => {
    if (error) console.log(error)
    else console.log("Server is ready to our message", success)
  })

  const mailOption = {
    from: "<noreply@onlinebikerental@portal.com>",
    to: email,
    subject: subject,
    html: body,
  }
  //send a mail
  transport.sendMail(mailOption, callback)
}

module.exports = {
  sendEmail: sendEmail,
}
