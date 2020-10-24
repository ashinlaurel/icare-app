require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

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

// Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

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
    useCreateIndex: true,
  })
  .then(console.log("DB CONNECTED"))
  .catch((err) => {
    console.log(err);
  });

app.get("/api/test", (req, res) => {
  res.status(200).send("Successfull!");
});
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

// Call Routes-------------------------------------------------
app.use("/api/call",callRoute );


// app.get("/", (req, res) => res.send("Hello World!"));

//Port and Listen
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
