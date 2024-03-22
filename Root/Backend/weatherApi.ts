import { Router } from "express";

export const weatherApi = Router();

weatherApi.get("/", async (req, res) => {
  const key = process.env.KEY;
  let city = "Katowice";

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`,
  );
  const weatherData = await response.json();
  res.send(weatherData);
  console.log(weatherData);
});
