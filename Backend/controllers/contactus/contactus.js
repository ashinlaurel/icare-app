const nodemailer = require("nodemailer");

exports.contactus = (req, res) => {
  //////// dont forget to pass customer name and CustId is login from frontend
  console.log(req.body);
  let output = `
    <h1>Contact Us Form</h1>
     <ul>
       <li>Firstname: ${req.body.firstname}</li>
       <li>Lastname: ${req.body.lastname}</li>
       <li>Email: ${req.body.email}</li>
     </ul>
     <p>Message: ${req.body.message}</p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "infocareenquiry@gmail.com",
      pass: "infocare12345",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Infocare Contact Us Form" <infocareenquiry@gmail.com>', // sender address
    to: "basil@infocareindia.com", // list of receivers
    subject: "Contact Us Form", // Subject line
    text: req.body.message, // plain text body
    html: output, // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.send(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  });
  return res.status(200).json({ note: "success" });
};
