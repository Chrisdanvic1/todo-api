import express from "express";
import { PORT } from "./config/env.js";

const app = express();
// console.log(app.get);
app.get("/", (req, res) => {
  res.send("Welcome to Todo API");
});

app.listen(PORT, () => {
  //   window.alert("Todo API is running");
  console.log(`Todo API is running on http://localhost:${PORT}`);
});

export default app;
