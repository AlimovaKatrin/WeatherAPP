import dayReducer from '../reducers/dayReducer';
import * as types from '../actionTypes';

describe('reducer for weather on a day', () => {
    it('should return initial state', () => {
        expect(dayReducer(undefined,{})).toEqual({})
    })
    it('should add weather object for the day',() => {
        expect(dayReducer({},{
            type: types.ADD_WEATHER_DAY,
            payload: {
                city:'EXAMPLE',
                temp: '+34'
            }
        })).toEqual({
            city:'EXAMPLE',
            temp: '+34'
        })
    })
})