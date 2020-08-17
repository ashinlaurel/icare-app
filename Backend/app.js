require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

//routes import
// const authRoute = require("./routes/auth");
// const userRoute = require("./routes/user");
// const categoryRoute = require("./routes/category");
// const productRoute = require("./routes/product");

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

// Routes
// app.use("/api", authRoute);
// app.use("/api", userRoute);
// app.use("/api", categoryRoute);
// app.use("/api", productRoute);

app.get("/", (req, res) => res.send("Hello World!"));

//Port and Listen
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
