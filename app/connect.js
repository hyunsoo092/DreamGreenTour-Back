// mongodb+srv://fronttwo24:1234@cluster0.n09vftn.mongodb.net/

import mongoose from "mongoose";

const connectionUrl = `mongodb+srv://fronttwo24:1234@cluster0.n09vftn.mongodb.net/`;

const connect = () => {
  if (process.env.NODE_ENV !== "production") {
    mongoose.set("debug", true);
  }
  mongoose
    .connect(connectionUrl, {
      dbName: "express",
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log(`Connected fail MongoDB`);
      console.error(err);
    });
};

export default connect;
