import {useSelector} from 'react-redux'
import {useEffect} from 'react'

function WeatherCard(){

    const { weatherData, loadingStatus, errorMessage } = useSelector((state) => state.weather);

    useEffect(() => {
        if (!weatherData) return;
        const localTime = new Date((weatherData.dt + weatherData.timezone) * 1000);
        const hours = localTime.getUTCHours()


        let background = ""

        if(hours >= 6 && hours < 12){
            background = "morning"
        }
        else if (hours >= 12 && hours < 18){
            background = "afternoon"
        }
        else if (hours >= 18 && hours < 20){
            background = "evening"
        }
        else{
            background = "night"
        }

        document.body.className = background
        
    },[weatherData])

    if (loadingStatus) return <p>Loading...</p>;

    if (errorMessage) return <p>Error: {errorMessage}</p>;

    if (!weatherData) return null;

    const location = weatherData.name
    const temperature = weatherData.main.temp
    const humidity = weatherData.main.humidity
    const icon = weatherData.weather[0].icon

    return (
        <>
        <div className="showWeather">
            <h1>Weather</h1>
            <h2>Location: {location}</h2>
            <p>Temperature: {temperature}</p>
            <p>Humidity: {humidity}</p>
            <p>Icon: 
                <img 
                    src={`https://openweathermap.org/img/wn/${icon}.png`} 
                    alt="weather icon" 
                />
            </p>
        </div>
        </>
    )
}

export default WeatherCard