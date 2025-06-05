const express = require("express");
const app = express();
const cors = require("cors");

const { Detail } = require("./model");

app.use(express.json());
app.use(cors());


app.post("/contact", async (req, res) => {
  try {
    const { name, email, number, service, msg } = req.body;

    await Detail.create({
      name,
      email,
      number,
      service,
      message: msg,
    });

    res.status(201).json({
      msg: "Details added successfully",
    });
  } catch (error) {
    console.error("Error saving details:", error);
    res.status(500).json({
      msg: "Something went wrong",
      error: error.message,
    });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
