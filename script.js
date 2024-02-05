async function fetchWeather(city) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=49a45a443b2146b9ba705034240202&q=${city}&aqi=no`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        // Gather API info
        const location = data.location.name + ', ' + data.location.region + ', ' + data.location.country;
        const temperature = data.current.temp_c + '°C';
        const condition = data.current.condition.text;

        // Display current weather information on page
        const weatherContainer = document.getElementById('weather-container');
        weatherContainer.innerHTML = `
            <h2>Current Weather</h2>
            <p><strong>Location:</strong> ${location}</p>
            <p><strong>Temperature:</strong> ${temperature}</p>
            <p><strong>Condition:</strong> ${condition}</p>
        `;

        // Fetch 7 day forecast data
        const forecastResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=49a45a443b2146b9ba705034240202&q=${city}&days=7&aqi=no&alerts=no`);
        if (!forecastResponse.ok) {
            throw new Error('Failed to fetch forecast data');
        }
        const forecastData = await forecastResponse.json();

        // Display 7 day forecast
        const forecastContainer = document.createElement('div');
        forecastContainer.innerHTML = '<h2>7-Day Forecast</h2>';
        forecastData.forecast.forecastday.forEach(day => {
            const date = `<u>${day.date}</u>`;
            const temperature = `${day.day.maxtemp_c}°C / ${day.day.mintemp_c}°C`;
            const condition = day.day.condition.text;
            forecastContainer.innerHTML += `
                <div>
                    <p><strong>Date:</strong> ${date}</p>
                    <p><strong>Temperature:</strong> ${temperature}</p>
                    <p><strong>Condition:</strong> ${condition}</p>
                </div>
            `;
        });
        weatherContainer.appendChild(forecastContainer);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        const weatherContainer = document.getElementById('weather-container');
        weatherContainer.innerHTML = '<p>Failed to fetch weather data. Please try again later.</p>';
    }
}

// Call fetchWeather function when page loads
document.addEventListener('DOMContentLoaded', () => {
    const citySelect = document.getElementById('city');
    citySelect.addEventListener('change', () => {
        const selectedCity = citySelect.value;
        fetchWeather(selectedCity);
    });
    const defaultCity = citySelect.value;
    fetchWeather(defaultCity);
});
