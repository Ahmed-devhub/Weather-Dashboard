import {createSlice} from '@reduxjs/toolkit'

const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        weatherData:null,
        loadingStatus:false,
        errorMessage:null
    },
    reducers: {
        setLoading: (state) => {
            state.loadingStatus = true;
            state.error = null
        },
        setData: (state, action) => {
            state.loadingStatus = false;
            state.weatherData = action.payload
        },
        setError: (state, action) => {
            state.loadingStatus = false;
            state.errorMessage = action.payload
        }
    }
})

export const {setLoading, setData, setError} = weatherSlice.actions
export default weatherSlice.reducer
