import {endpoint, API_KEY} from "../locals";

export const fetchDayQuery = async (payload) => {
    const response = await fetch(`${endpoint}weather?q=${payload}&appid=${API_KEY}`);
    const dailyWeather = await response.json();
    return dailyWeather;
}
export const fetchDayLatAndLongitude = async (payload) => {
    const response = await fetch(`${endpoint}weather?lat=${payload.latitude}&lon=${payload.longitude}&appid=${API_KEY}`);
    const dailyWeather = await response.json();
    return dailyWeather;
}