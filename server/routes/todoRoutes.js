import { Router } from "express";
import { deleteTodos, getTodos } from "../controllers/todoController.js";

const todoRouter = Router();

todoRouter.get('/', getTodos);
todoRouter.delete('/',deleteTodos);

export default todoRouter;