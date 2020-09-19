import {call, put, takeEvery} from 'redux-saga/effects';
import {FETCH_WEATHER_WEEK} from "../actionTypes";
import {addWeatherWeekAC, errDayAC} from "../actionCreators";
import {fetchWeekLatAndLongitude, fetchWeekQuery} from "../../utils/fetch/fetchWeek";

function* fetchWeatherWorker({payload}) {
    const weekWeather = yield call(payload.longitude ? fetchWeekLatAndLongitude : fetchWeekQuery, payload)
    if (weekWeather.cod == 200) {
        yield put(addWeatherWeekAC(weekWeather))
    } else {
        yield put(errDayAC(weekWeather.message))
    }
}

export function* weekActionWatcher() {
    yield takeEvery(FETCH_WEATHER_WEEK, fetchWeatherWorker)
}
