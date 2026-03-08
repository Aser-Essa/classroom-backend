import express from "express";
import cors from "cors";
import subjectRouter from "./routes/subjects";

const app = express();
const PORT = 8000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "DELETE", "PUT", "POST"],
    credentials: true,
  }),
);

app.use(express.json());

app.use("/api/subjects", subjectRouter);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(PORT, async () => {
  console.log(`Server is runing on port: ${PORT}`);
});
