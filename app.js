const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '80973823femsh608aa6c730f1b71p190f87jsn8649519b3ad9',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

async function fetchWeather() {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const result = await response.json(); // Change to json() to parse the response as JSON
    console.log(result);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchWeather();
