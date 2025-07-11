import express, { json } from "express";
import mongoose from "mongoose";
import User from "./models/User.model.js";

const app = express();
app.use(json())

const uri =
  "mongodb+srv://webdeveloper05ats:S0JPIa3qojZl5Ofo@cluster0.qwgdii2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.use('/api/user/register', async (req, res)=>{
  try {
    const {name, dob, phone, email, password} = req.body
    const user = new User({name, dob, phone, email, password})
    await user.save()
    res.json({message: "User registered successfully"})
  } catch (error) {
    res.json({message: `Registration failed due to ${error}`})
  }
})

app.use('/api/user/login', (req, res)=>{
  res.send("<h1>Hello Login</h1>")
})

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
