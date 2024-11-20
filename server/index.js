import express from "express";
import mongoose from "mongoose";
import authRouter from "./routes/authRoutes.js";
import todoRouter from "./routes/todoRoutes.js";

const app = express();

app.use(express.json());

app.use("/auth", authRouter);
app.use("/todo", todoRouter);

(async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Shivaprasad:Pass123@cluster0.cwxauli.mongodb.net/todoMahesh?retryWrites=true&w=majority"
    );
    app.listen(3000, () => console.log("App successfully created!"));
  } catch (error) {
    console.log(error?.message);
    process.exit(1);
  }
})();
