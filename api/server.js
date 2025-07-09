import express from "express";
import mongoose from "mongoose";

const app = express();

const uri =
  "mongodb+srv://webdeveloper05ats:S0JPIa3qojZl5Ofo@cluster0.qwgdii2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(uri)
  .then(() => {
    console.log("Database is connected");
    app.listen(3000, () => {
      console.log("Server is running");
    });
  })
  .catch((error) => {
    console.log(error);
  });
