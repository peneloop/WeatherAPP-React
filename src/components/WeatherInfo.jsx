function WeatherInfo ({weather}) {
    return (
        <div className="flex text-center justify-center space-y-6 flex-col mt-8 bg-linear-to-b from-weather-dark-purple/35 to-weather-purple/60 
        rounded-2xl p-6 text-purple-100">
            <h2 className="font-bold text-2xl">{weather.name}</h2>

            <div className="flex items-center justify-center gap-2">
                <img className="w-20 h-20 md:w-28 md:h-28" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}/>
                <p className="font-bold text-5xl">{Math.round(weather.main.temp)}°C</p>
            </div>

            <p className="capitalize">{weather.weather[0].description}</p>

            <div className="flex justify-between w-full">
                <p>Sensação Térmica: {Math.round(weather.main.feels_like)}°C</p>
                <p>Umidade: {weather.main.humidity}%</p>
                <p>Pressão: {weather.main.pressure} hPa</p>
            </div>
        </div>
    )
}

export default WeatherInfo