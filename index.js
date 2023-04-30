import express from "express";
import dotenv from "dotenv";
import account_router from "./routes/account.js";

// Load environment variables into global variables
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

// Middlewares
app.use(express.json());
app.use(express.text());
app.use("/account", account_router);

app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});
