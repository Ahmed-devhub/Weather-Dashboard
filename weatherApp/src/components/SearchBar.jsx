import {useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import axios from 'axios'
import { setData, setError, setLoading } from "../redux/weatherSlice.js";

function SearchBar(){
    const [location, setLocation] = useState("");
    const dispatch = useDispatch()
    const {weatherData} = useSelector((state) => state.weather);

    const fetchWeather = async (location) => {
        try{
            if(!location.trim())return;
            const isZip = /^\d+$/.test(location);
            const apiKey = import.meta.env.VITE_APIKEY
            const url = isZip ? 
            `https://api.openweathermap.org/data/2.5/weather?zip=${location}&appid=${apiKey}`
            : `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
            dispatch(setLoading())
            const response = await axios.get(url)
            dispatch(setData(response.data))
        }
        catch(e){
            dispatch(setError(e.message))
        }        
    }
    return (
        <>
        { !weatherData && <h1 style={{textAlign:"center"}}>Welcome to the Weather Dashboard</h1> }
        <form onSubmit={(e)=> {
            e.preventDefault() 
            fetchWeather(location)
        }}>
            <div className="searchBar">
                <input value = {location} onChange={(e)=>setLocation(e.target.value)} placeholder="Search"/>{" "}
                <button type="submit">Submit</button>
            </div>
        </form>
        </>
    )

}

export default SearchBar