import express from "express";
import {deleteById} from "./models/Movies.js";
import connectDB from "./db/connectDB.js";

const app = express();
const port = process.env.PORT || 8000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/movies";
connectDB(DATABASE_URL);

deleteById("6757343aa4488322cb7c3087");
app.listen(port, () => console.log(`Server is running on port ${port}`));
