import express from "express";
import { createServer } from "node:http";
import mongoose from "mongoose";
import cors from "cors";

import { connectToSocket } from "./controllers/socketManager.js";
import userRoutes from "./routes/users.routes.js";

const app = express();
const server = createServer(app);

// CORS
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

// routes
app.use("/api/v1/users", userRoutes);

// socket
connectToSocket(server);

// start server
const start = async () => {
  await mongoose.connect(
    "mongodb+srv://sharmamuskan4542_db_user:JEP7P34004vaS7Ae@cluster0.yv8zt0u.mongodb.net/?appName=Cluster0"
  );

  console.log("MongoDB connected");

  server.listen(8000, () => {
    console.log("Server running on port 8000");
  });
};

start();


