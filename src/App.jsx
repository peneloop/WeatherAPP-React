import { useRef, useState } from "react"
import './index.css'
import axios from "axios"
import WeatherInfo from "./components/WeatherInfo"
import { Search } from 'lucide-react'
import Weather5Days from "./components/Weather5Days"


function App () {
  const [weather, setWeather] = useState()
  const [weather5Days, setWeather5Days] = useState()
  const inputRef = useRef()

  async function searchCity() {
    const city = inputRef.current.value
    const key = "39f78062cd2968c303ac80bfa3ea8c81"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const serverData = await axios.get(url)
    const serverData5Days = await axios.get(url5Days)
    setWeather5Days(serverData5Days.data)
    setWeather(serverData.data)
  }
  
  return (
    <div className="font-roboto text-purple-200 bg-linear-to-b from-dark-purple to-light-purple flex justify-center p-6 min-h-screen">
      <div className="w-125 space-y-4">
      <h1 className="text-3xl font-bold text-center">Previsão do Tempo</h1>
      
      <div className="mx-auto bg-weather-purple/30 border-none rounded-full shadow-sm flex items-center w-full max-w-md p-1">
        <input
        className="flex-1 rounded-full w-full px-2 bg-transparent outline-none placeholder:text-purple-200/50"
        ref={inputRef} type="text" placeholder="Digite o nome da cidade"/>
        <button
        className="cursor-pointer px-6 py-2 font-bold transition-colors bg-weather-purple/45 rounded-3xl  hover:bg-weather-purple/30 hover:text-purple-300/80"
        onClick={searchCity}>Buscar cidade</button>
      </div>

      {/* Ajuda na renderização da página, apenas carregando o conteúdo depois do input */}
      {weather && <WeatherInfo weather={weather}/>}
      {weather5Days && <Weather5Days weather5Days={weather5Days}/>}
      </div>
    </div>
  )

}

export default App