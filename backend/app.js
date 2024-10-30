import "dotenv/config";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import express from "express";
import { authRouter, adminRouter, clientRouter, productRouter, productMenuRouter } from "./routes/index.js";

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.json());
app.use(express.static(join(__dirname, "public", "html")));
app.use(cors());
app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "public", "index.html"));
});

//routes
app.use("/api/auth", authRouter);

app.use("/api/admin", adminRouter);

app.use("/api/client", clientRouter);

app.use("/api/product", productRouter);

app.use("/api/productMenu", productMenuRouter);

export { app };
