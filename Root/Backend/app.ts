import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();
import { weatherApi } from "./weatherApi";
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  }),
);

app.use("/", weatherApi);

app.listen(3001, "localhost", () => {
  console.log("listening on  http://localhost:3001");
});
