import mongoose from "mongoose";

const { MONGODB_URI } = process.env;

if (!MONGODB_URI) {
  throw new Error("Invalid Uri");
}

const connectToMongoDB = async () => {
  try {
    const { connection } = await mongoose.connect(MONGODB_URI, {
      dbName: "small_business_payment",
    });
    if (connection.readyState === 1) {
      console.log("Connect to db");
      return Promise.resolve(true);
    }
  } catch (error) {
    console.log("Failed to connect");
    return Promise.reject(error);
  }
};

export default connectToMongoDB;
