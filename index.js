import express from "express";
import dotenv from "dotenv";
import { USERS_DATA } from "./bbdd.js";

// Load environment variables into global variables
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

// Middlewares
app.use(express.json());
app.use(express.text());

// Get account details
app.get("/account/:guid", (req, res) => {
  //Verify user existence
  const user = USERS_DATA.find((user) => user.guid === req.params.guid);
  if (!user) return res.status(404).send();
  return res.send(user);
});

// Create account
app.post("/account/", (req, res) => {
  const { guid, name, company, email, phone } = req.body;
  //Verify user existence (Status 409 if user is already registered)
  const user_exist = USERS_DATA.find(
    (user) => user.guid === guid
  );
  if (user_exist) return res.status(409).send();

  const new_user = {
    guid: guid,
    isActive: true,
    name: name,
    company: company,
    email: email,
    phone: phone,
  };
  USERS_DATA.push(new_user);

  return res.send("Account created!");
});

// Update account
app.patch("/account/:guid", (req, res) => {
  const { name, company, email, phone } = req.body;
  //Verify user existence
  const user_index_update = USERS_DATA.findIndex(
    (user) => user.guid === req.params.guid
  );
  if (user_index_update === -1) return res.status(404).send();

  // Obtain a copy of the user data and update (Operator spread/rest)
  USERS_DATA[user_index_update] = {
    ...USERS_DATA[user_index_update],
    name: name || USERS_DATA[user_index_update].name,
    company: company || USERS_DATA[user_index_update].company,
    email: email || USERS_DATA[user_index_update].email,
    phone: phone || USERS_DATA[user_index_update].phone,
  };

  return res.send(USERS_DATA[user_index_update]);
});

// Delete account
app.delete("/account/:guid", (req, res) => {
  //Verify user existence
  const user_index_delete = USERS_DATA.findIndex(
    (user) => user.guid === req.params.guid
  );
  if (user_index_delete === -1) return res.status(404).send();
  USERS_DATA.splice(user_index_delete, 1);
  return res.send("Successfully eliminated!");
});

app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});
