import mongoose from "mongoose";

let connectToMongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://sachinstha977:YytbizvTJKPa2SBU@helping-hands.ffxs3u7.mongodb.net/?retryWrites=true&w=majority"
    );

    console.log("Our application is connected to MongoDB successfully");
  } catch (error) {
    console.log(error.message);
  }
};

export default connectToMongoDB;
