import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
const app = express();

const getWeatherData = async () => {
  let city = "Katowice";
  const key = process.env.KEY;

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`,
    );
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("there have been an", error);
  }
};
getWeatherData();

app.listen(3001, "localhost", () => {
  console.log("lisening on  http://localhost:3001");
});
