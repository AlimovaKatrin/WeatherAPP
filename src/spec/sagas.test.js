import {takeEvery} from 'redux-saga/effects';
import {FETCH_WEATHER_DAY} from '../redux/actionTypes';
import {dayActionWatcher, fetchWeatherWorker} from '../redux/sagas/daySaga';

describe('fetch weather for day from openweather API', () => {
    const generator = dayActionWatcher();

    it('should wait for FETCH_WEATHER_DAY action and call fetchWeatherWorker', () => {
        expect(generator.next().value)
            .toEqual(takeEvery(FETCH_WEATHER_DAY, fetchWeatherWorker))
    })
    it('should be done on next iteration', () => {
        expect(generator.next().done).toBeTruthy();
    })
})
