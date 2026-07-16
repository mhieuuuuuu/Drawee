import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
  });
  mongoose.connection.on("error", (err) => {
    console.log("Error connecting to MongoDB", err);
  });
  mongoose.connection.on("disconnected", () => {
    console.log("Disconnected from MongoDB");
  });
  await mongoose.connect(`${process.env.MONGODB_URL}/drawee`);
};

export default connectDB;
