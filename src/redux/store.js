import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './sagas/rootSaga';
import day from './reducers/dayReducer';
import week from './reducers/weekReducer';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(combineReducers({day, week}),

    composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
