const nodemailer = require("nodemailer");
const {
  TotalCallsGenerate,
  CallsGreaterThanAgeGenerate,
} = require("./ReportsHelper");
const ReportsEmail = require("../../models/settings/ReportsEmail");

exports.sendReportsEmail = async () => {
  console.log("Starting to send reports email");
  const totalCallsCsv = await TotalCallsGenerate();
  const calls24hrsCsv = await CallsGreaterThanAgeGenerate(2);
  const calls3daysCsv = await CallsGreaterThanAgeGenerate(3);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "icarehandler@gmail.com",
      pass: "panvtyngckxqqdhg",
    },
  });

  //Get the destination emails to send reports to from mongoDb
  const emailEntry = await ReportsEmail.findOne({});
  if (!emailEntry || !emailEntry.emails || emailEntry.emails.length < 1) {
    console.log(
      "Destination email IDs not found in DB. Unable to send reports"
    );
    return;
  }

  const emails = emailEntry.emails;

  const mailOptions = {
    from: "icarehandler@gmail.com",
    to: "",
    subject: "Daily Icare reports",
    html: "<p>Here is your CSV file:</p>",
    attachments: [
      {
        filename: "totalCalls.csv",
        content: totalCallsCsv, // assuming you have a Blob object named csvBlob
      },
      {
        filename: "callsGreaterThan24Hrs.csv",
        content: calls24hrsCsv, // assuming you have a Blob object named csvBlob
      },
      {
        filename: "callsGreaterThan3Days.csv",
        content: calls3daysCsv, // assuming you have a Blob object named csvBlob
      },
    ],
  };

  for (const email of emails) {
    mailOptions.to = email;
    // console.log(mailOptions.to);
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  }

  console.log("completed sending email");
};
