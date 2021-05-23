const nodemailer = require("nodemailer");

exports.contactus = (req, res) => {
  //////// dont forget to pass customer name and CustId is login from frontend
  console.log(req.body);
  let output = `
    <h1>New Email!</h1>
     <ul>
       <li>Firstname: ${req.body.firstname}</li>
       <li>Lastname: ${req.body.lastname}</li>
       <li>Email: ${req.body.email}</li>
       <li>Message: ${req.body.message}</li>
     </ul>
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
    from: '"Nodemailer Contact" <infocareenquiry@gmail.com>', // sender address
    to: "anaddiths@gmail.com", // list of receivers
    subject: "Node Contact Request", // Subject line
    text: req.body.message, // plain text body
    html: output, // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.send(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  });
};
