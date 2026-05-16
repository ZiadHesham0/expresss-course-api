const { mongoose } = require("mongoose");

const DB_URL =
  "mongodb+srv://zyademailsonly_db_user:zyad123456789@cluster0.rqn0ahw.mongodb.net/nodeJS_course?appName=Cluster0";

let isConnected = false;

async function connectDB() {
  if (isConnected) return;
  try {
    const dbConnection = await mongoose.connect(DB_URL);
    isConnected = dbConnection.connections[0].readyState;
    console.log("DB Connected Successfully");
  } catch (error) {
    console.error("DB connection failed:", err.message);
    throw err; // ← let the API route return a proper 500
  }
}

module.exports = connectDB;
