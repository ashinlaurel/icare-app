import EmployeeLogin from "../../models/employee/EmployeeLogin";

const nodemailer = require("nodemailer");

console.log("test mail script");

let output = `
    <h1>Test Email</h1>
     <ul>
       <li>Firstname: Ashin Laurel</li>
       <li>Lastname: Hello</li>
       <li>Email: Macha</li>
     </ul>
     <p>Message: Lubba dub dub</p>
  `;

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: true,
  auth: {
    user: "infocareenquiry@gmail.com",
    pass: "tifdbyfihqtvxqaa",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// setup email data with unicode symbols
let mailOptions = {
  from: '"Infocare Contact Us Form" <infocareenquiry@gmail.com>', // sender address
  to: "ashinlaurel1999@gmail.com", // list of receivers
  subject: "Test Email", // Subject line
  text: "what is this text", // plain text body
  html: output, // html body
};

// send mail with defined transport object

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
});
