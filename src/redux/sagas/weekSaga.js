import {call, put, takeEvery} from 'redux-saga/effects';
import {FETCH_WEATHER_WEEK} from "../actionTypes";
import {addWeatherWeekAC} from "../actionCreators";
import {fetchWeekLatAndLongitude, fetchWeekQuery} from "../fetch/fetchWeek";

function* fetchWeatherWorker({payload}) {
    const weekWeather = yield call(payload.longitude ? fetchWeekLatAndLongitude : fetchWeekQuery, payload)
    yield put(addWeatherWeekAC(weekWeather))
}

export function* weekActionWatcher() {
    yield takeEvery(FETCH_WEATHER_WEEK, fetchWeatherWorker)
}
