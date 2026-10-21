require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const nodemailer = require("nodemailer");
const cron = require("node-cron"); //for scheduling

//routes import
//user routes
const CustomerAuthRoute = require("./routes/customer/CustomerAuth");
const AccountRoute = require("./routes/customer/Account");

const EmployeeAuthRoute = require("./routes/employee/EmployeeAuth");
//unit
const UnitRoute = require("./routes/unit/Unit");
// const userRoute = require("./routes/user");
// const categoryRoute = require("./routes/category");
// const productRoute = require("./routes/product");
const serverRoute = require("./routes/products/server");
const assetRoute = require("./routes/assets/assets");
const callRoute = require("./routes/calls/Call");
const attendanceRoute = require("./routes/attendance/attendance");
const leaveformRoute = require("./routes/leaveForm/leaveform");

// Inventory Import
const inventoryRoute = require("./routes/inventory/inventory");
// LST Import
const LSTRoute = require("./routes/LST/LST");
//
// Vendor Import
const VendorRoute = require("./routes/Vendor/Vendor");

//image API
const imgUploadRoute = require("./routes/uploadapi");

//contactus API
const ContactUs = require("./routes/contactus/contactus");
const { contractCheckForAssets } = require("./controllers/assets/assetcron");

// Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// create application/json parser
var jsonParser = bodyParser.json();

// async () => {
//   try {
//     await mongoose.connect(process.env.DATABASE, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//     });
//     console.log("DB CONNECTED!");
//   } catch (error) {
//     throw error;
//   }
// };

// Connection to MongoDB
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => {
    console.log(err);
  });

app.get("/api/test", (req, res) => {
  res.status(200).send("Successfull! Backend Routes Working");
});
// Release verification must check the database, not just the HTTP listener.
app.get("/api/health", async (req, res) => {
  res.set("Cache-Control", "no-store");
  try {
    if (mongoose.connection.readyState !== 1) throw new Error("Database unavailable");
    await mongoose.connection.db.admin().ping();
    return res.json({ status: "ok", release: process.env.RELEASE_SHA || "development" });
  } catch (error) {
    return res.status(503).json({ status: "unavailable" });
  }
});

// The isolated test environment must not send real mail or upload public files.
if (process.env.DISABLE_EXTERNAL_INTEGRATIONS === "true") {
  app.use(["/api/contactform", "/api/upload"], (req, res) =>
    res.status(503).json({ error: "External integrations are disabled in this environment" })
  );
}
// User Routes-------------------------------------------------
app.use("/api/customer", CustomerAuthRoute);
app.use("/api/account", AccountRoute);
app.use("/api/admin", EmployeeAuthRoute);

//unit Routes -------------------------------------------------
app.use("/api/unit", UnitRoute);

// app.use("/api", userRoute);
// app.use("/api", categoryRoute);
//
// Product Routes-------------------------------------------------
app.use("/api/product/server", serverRoute);
app.use("/api/asset", assetRoute);
// Inventory Routes-------------------------------------------------
app.use("/api/inventory", inventoryRoute);

// Call Routes-------------------------------------------------
app.use("/api/call", callRoute);

//image api ---------------------------------------------
app.use("/api/upload", imgUploadRoute);

//lst route ---------------------------------------------
app.use("/api/lst", LSTRoute);

//Vendor route ---------------------------------------------
app.use("/api/vendor", VendorRoute);

//ContactUs route ----------------------------------------------------

app.use("/api/contactform", ContactUs);
//Attendance Route ----------------------------------------------------

app.use("/api/attendance", attendanceRoute);
//Leave form ----------------------------------------------------

app.use("/api/leave", leaveformRoute);

// app.get("/", (req, res) => res.send("Hello World!"));

//Schedules CRON job at 3:00Am IST to update ASSETS
if (process.env.DISABLE_SCHEDULED_JOBS !== "true") {
  cron.schedule("0 3 * * *", contractCheckForAssets, {
    timezone: "Asia/Kolkata",
    scheduled: true,
  });
}

//Port and Listen
const port = process.env.PORT || 3000;
app.listen(port, process.env.HOST || "0.0.0.0", () =>
  console.log(`Listening on port ${port}`)
);
