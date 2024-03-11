
const getWeatherData = async () => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.}`,
    );
    console.log(response);
  } catch (error) {
    console.log("there have been an", error);
  }
};
getWeatherData();
