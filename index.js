import express from "express";

const PORT = 3000;
const app = express();

// Middlewares
app.use(express.json());
app.use(express.text());

app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});
