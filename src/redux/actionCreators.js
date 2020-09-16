import {ADD_WEATHER_DAY, FETCH_WEATHER_DAY} from './actionTypes';

export const addWeatherDayAC = (payload) => ({
    type: ADD_WEATHER_DAY,
    payload
})

export const fetchWeatherDayAC = (payload) => ({
    type: FETCH_WEATHER_DAY,
    payload
})