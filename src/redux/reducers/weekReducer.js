import {ADD_WEATHER_WEEK} from '../actionTypes';

export default function (store = [], action) {
    switch (action.type) {
        case ADD_WEATHER_WEEK:
            return action.payload
        default:
            return store;
    }
};