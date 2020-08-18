require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

//routes import
//user routes
const CustomerAuthRoute = require("./Routes/Customer/CustomerAuth");
const EmployeeAuthRoute = require("./Routes/Employee/EmployeeAuth");
// const userRoute = require("./routes/user");
// const categoryRoute = require("./routes/category");
// const productRoute = require("./routes/product");
const consoleRoute = require("./routes/products/console");
const serverRoute = require("./routes/products/server");

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

// User Routes
app.use("/api", CustomerAuthRoute);
app.use("/api/admin/", EmployeeAuthRoute);
// app.use("/api", userRoute);
// app.use("/api", categoryRoute);
// Product Routes-------------------------------------------------
app.use("/api/product/console", consoleRoute);
app.use("/api/product/server", serverRoute);

app.get("/", (req, res) => res.send("Hello World!"));

//Port and Listen
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
