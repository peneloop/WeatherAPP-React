function Weather5Days ({weather5Days}) {
    let dailyForest = {}

    for(let forecast of weather5Days.list){
        const date = new Date(forecast.dt * 1000).toLocaleDateString()
        
        if(!dailyForest[date]){
            dailyForest[date] = forecast
        }
    }

    const next5DaysForecast = Object.values(dailyForest).slice(1,6)

    function convertDate(date){
        const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'short', day:'2-digit'})
    
        return newDate
    }

    return (
        <div className="flex text-center justify-center space-y-6 flex-col mt-8 bg-linear-to-b from-weather-dark-purple/35 to-weather-purple/60 
        rounded-2xl p-6 text-purple-100 items-center">
            <h3 className="font-medium text-xl">Previsão dos próximos 5 dias</h3>

            <div className="grid grid-cols-3 gap-y-10 gap-x-20 text-sm w-full">
            {next5DaysForecast.map(forecast => (
                <div key={forecast.dt}>
                    <p className="capitalize">{convertDate(forecast)}</p>
                    <img className="size-16" src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} />
                    <p className="capitalize">{forecast.weather[0].description}</p>
                    <p>{Math.round(forecast.main.temp_min)}° / {Math.round(forecast.main.temp_max)}°</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Weather5Days