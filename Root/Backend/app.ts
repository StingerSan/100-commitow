import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
const app = express();

// const getWeatherData = async () => {
//   let city = "Katowice";
//   const key = process.env.KEY;
//
//   try {
//     const res = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`,
//     );
//     const data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.log("there have been an", error);
//   }
// };
// getWeatherData();

app.get("/", async (req, res) => {
  const key = process.env.KEY;
  let city = "Katowice";

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`,
  );
  const weatherData = await response.json();
  res.send(weatherData);
  console.log(weatherData);
});

app.listen(3001, "localhost", () => {
  console.log("listening on  http://localhost:3001");
});
