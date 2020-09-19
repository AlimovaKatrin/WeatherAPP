import dayReducer from '../redux/reducers/dayReducer';
import weekReducer from '../redux/reducers/weekReducer';
import errReducer from '../redux/reducers/errReducer';
import * as types from '../redux/actionTypes';

describe('reducer for weather on a day', () => {
    it('should return initial state', () => {
        expect(dayReducer(undefined, {})).toEqual({})
    })
    it('should add weather object for the day', () => {
        expect(dayReducer({}, {
            type: types.ADD_WEATHER_DAY,
            payload: {
                city: 'EXAMPLE',
                temp: '+34'
            }
        })).toEqual({
            city: 'EXAMPLE',
            temp: '+34'
        })
    })
});

describe('reducer for weather on a week', () => {
    it('should return initial state', () => {
        expect(weekReducer(undefined, {})).toEqual([])
    })
});

describe('reducer for errors', () => {
    it('should return initial state with false', () => {
        expect(errReducer(undefined, {})).toEqual({status: false, message: null})
    })
    it('should return true if some error comes', () => {
        expect(errReducer({status: false, message: null}, {
            type: 'ERR_IN_APP',
            payload: 'no such sity'
        })).toEqual({status: true, message: 'no such sity'})
    })
})