import {call, put, takeEvery} from 'redux-saga/effects';
import {FETCH_WEATHER_DAY} from "../actionTypes";
import {addWeatherDayAC} from "../actionCreators";
import {fetchDayLatAndLongitude, fetchDayQuery} from "../../utils/fetch/fetchDay";

function* fetchWeatherWorker({payload}) {
    const dailyWeather = yield call(payload.longitude ? fetchDayLatAndLongitude : fetchDayQuery, payload)
    yield put(addWeatherDayAC(dailyWeather))
}

export function* dayActionWatcher() {
    yield takeEvery(FETCH_WEATHER_DAY, fetchWeatherWorker)
}
