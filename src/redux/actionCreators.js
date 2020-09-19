import {
    ADD_WEATHER_DAY,
    FETCH_WEATHER_DAY,
    FETCH_WEATHER_WEEK,
    ADD_WEATHER_WEEK
} from './actionTypes';

export const addWeatherDayAC = (payload) => ({
    type: ADD_WEATHER_DAY,
    payload
});

export const fetchWeatherDayAC = (payload) => ({
    type: FETCH_WEATHER_DAY,
    payload
});

export const addWeatherWeekAC = (payload) => ({
    type: ADD_WEATHER_WEEK,
    payload
})

export const fetchWeatherWeekAC = (payload) => ({
    type: FETCH_WEATHER_WEEK,
    payload
})

export const errDayAC = (payload) => ({
    type: 'ERR_IN_APP',
    payload
})