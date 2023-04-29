import express from "express";
import dotenv from "dotenv";
import { USERS_BBDD } from "./bbdd.js";

// Load environment variables into global variables
dotenv.config();

const PORT = 3000;
const app = express();

// Middlewares
app.use(express.json());
app.use(express.text());

// Get account details
app.get("/account/", (req, res) =>{
  
});
// Create account
app.post("/account/", (req, res) =>{
  
});
// Update account
app.patch("/account/", (req, res) =>{
  
});
// Delete account
app.delete("/account/", (req, res) =>{
  
});

app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});
