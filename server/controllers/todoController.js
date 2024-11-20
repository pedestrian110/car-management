import Todo from "../modals/todoModal.js";

export async function getTodos(req, res) {
  try {
    const userId = req.body.userId;
    const todos = await Todo.find({ user: userId });
    if (!todos) {
      return res.status(400);
    }
    return res.status(200).json({ todos });
  } catch (error) {
    return res.status(500);
  }
}
export async function deleteTodos(req, res) {
  try {
    const userId = req.body.userId;
    const todoId = req.body.todoId;

    const todo = await Todo.deleteOne({ _id: todoId, user: userId });
    if (!todo) {
      return res.status(400);
    }
    return res.status(200).send("Deleted");
  } catch (err) {
    return res.status(500);
  }
}
