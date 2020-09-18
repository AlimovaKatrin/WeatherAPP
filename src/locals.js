export const endpoint = 'https://api.openweathermap.org/data/2.5/';
export const API_KEY = process.env.REACT_APP_API_KEY;
export const tempConventer = (kelvinTemp) => {
    return Math.round(kelvinTemp - 273.15)
}