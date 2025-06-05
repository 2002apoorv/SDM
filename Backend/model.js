const mongoose = require("mongoose");

const dotenv=require("dotenv");
dotenv.config();

const mongourl=process.env.MONGO_URL;

mongoose.connect(mongourl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));


const detailSchema = new mongoose.Schema({
  name: String,
  email: String,
  number: String,
  service: String,
  message: String,
});

const Detail = mongoose.model("Detail", detailSchema);

module.exports = { Detail };
