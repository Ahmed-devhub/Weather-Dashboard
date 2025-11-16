# Weather Dashboard

A weather application built with **React**, **Redux Toolkit**, **Vite**, and the **OpenWeather API**.  
Users can search weather by **city name** or **ZIP code**, view temperature, humidity, and weather icons, and see a **dynamic background** that changes based on the location’s local time (morning, afternoon, evening, night).

---

## Live Site
https://ahmed-weather-dashboard.netlify.app/

---

## Technologies Used
- React (Vite)
- Redux Toolkit (global state for weather, loading, errors)
- JavaScript (ES6)
- Axios (API calls)
- CSS (custom styling, dynamic backgrounds)
- OpenWeather API
- Netlify Deployment

---

## Features Implemented
- Search weather by **city** or **ZIP**
- Real-time temperature, humidity, weather condition icon
- Dynamic background based on **local timezone**
- Loading indicator + error messages
- Clean UI with centered layout and responsive design
- API key stored securely using `.env`

---

## Project Structure

src/

components/

SearchBar.jsx

WeatherCard.jsx

pages/

Home.jsx

redux/

store.js

weatherSlice.js

styles/

style.css

main.jsx

.env

---

## Running Locally
1. Install dependencies: npm install
2. Create a `.env` file: VITE_APIKEY=your_openweather_api_key
3. Start the development server: npm run dev

---

## Deploying to Netlify
1. Run: npm run build
2. Upload the **dist** folder OR use GitHub integration  
3. Set:
- Build: `npm run build`  
- Publish: `dist`

---

## Author
Ahmed Sharif  
SBA 320H - React Web Application Project