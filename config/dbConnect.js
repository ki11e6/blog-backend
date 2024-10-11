import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_URI);
    console.log(`MongoDB Connected: ${connect.connection.host}`);
    //log queries
    // mongoose.set("debug", true);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default dbConnect;
