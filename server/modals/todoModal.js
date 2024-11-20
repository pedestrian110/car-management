import mongoose, { model, Schema } from "mongoose";
const todoschema = new Schema({
  title: {
    type: "String",
    required: true,
  },
  description: {
    type: "String",
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
});
const Todo = model("Todo", todoschema);
export default Todo;
