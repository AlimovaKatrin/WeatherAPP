import {call, put, takeEvery} from 'redux-saga/effects';
import {FETCH_WEATHER_DAY} from "../actionTypes";
import {addWeatherDayAC, errDayAC} from "../actionCreators";
import {fetchDayLatAndLongitude, fetchDayQuery} from "../../utils/fetch/fetchDay";

function* fetchWeatherWorker({payload}) {
    const dailyWeather = yield call(payload.longitude ? fetchDayLatAndLongitude : fetchDayQuery, payload);
    if (dailyWeather.cod == 200) {
        yield put(addWeatherDayAC(dailyWeather));
    } else {
        yield put(errDayAC({status: true, message: dailyWeather.message}))
    }
}

export function* dayActionWatcher() {
    yield takeEvery(FETCH_WEATHER_DAY, fetchWeatherWorker)
}
