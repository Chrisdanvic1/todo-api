import { Router } from "express";

const taskRouter = Router();

taskRouter.get("/", (req, res) => res.send({ title: "Get all Tasks" }));

taskRouter.get("/:id", (req, res) => res.send({ title: "Get task by id" }));

taskRouter.post("/", (req, res) => res.send({ title: "Create New Task" }));

taskRouter.put("/:id", (req, res) => res.send({ title: "update Task by id" }));

taskRouter.delete("/:id", (req, res) =>
  res.send({ title: "Delete Task by id" }),
);

export default taskRouter;
