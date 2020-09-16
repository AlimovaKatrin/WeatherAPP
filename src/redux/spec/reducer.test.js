import dayReducer from '../reducers/dayReducer';
import weekReducer from '../reducers/weekReducer';
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
});

describe('reducer for weather on a week',()=>{
    it('should return initial state',()=>{
        expect(weekReducer(undefined,{})).toEqual([])
    })
})