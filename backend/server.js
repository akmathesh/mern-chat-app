import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandling, notFound } from "./middlewares/errorMiddleware.js";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandling);

app.listen(PORT, () => {
  console.log(`Server started on PORT http://localhost:${PORT}`);
});
