import mongoose from "mongoose";

export const connectToMongodb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI ?? "");
    console.log("Mongodb connected");
  } catch (error) {
    console.log("Error try to connecting database", error);
  }
};
