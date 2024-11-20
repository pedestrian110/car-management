import { model, Schema } from "mongoose";

const authSchema = new Schema({
  userName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const User = model("User", authSchema);

export default User;
