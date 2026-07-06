import express from "express";
import { PORT } from "./config/env.js";
import taskRouter from "./routes/tasks.routes.js";

const app = express();
app.use(express.json());

app.use("/api/v1/tasks", taskRouter);
// console.log(app.get);
app.get("/", (req, res) => {
  res.send("Welcome to Todo API");
});

app.listen(PORT, () => {
  //   window.alert("Todo API is running");
  console.log(`Todo API is running on http://localhost:${PORT}`);
});

export default app;
