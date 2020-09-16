import {all} from "redux-saga/effects";
import { dayActionWatcher } from './daySaga';
export function* rootSaga() {
    yield all([
        dayActionWatcher()
    ])
}