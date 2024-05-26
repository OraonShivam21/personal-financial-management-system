const express = require("express");
const userRouter = require("./routes/user.routes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: "Welcome to the Personal Finance Management System" });
});

// defining all the routes
app.use("/user", userRouter);

app.listen(PORT, () => {
  try {
    console.log("connected to mongodb");
    console.log("listening on port", PORT);
  } catch (error) {
    console.error("error while listening:", error);
  }
});
