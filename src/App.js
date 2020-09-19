import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {fetchWeatherDayAC, fetchWeatherWeekAC} from './redux/actionCreators';
import style from './App.module.scss';
import {DayCard} from './components/DayCard/DayCard';
import {WeekList} from './components/WeekList/WeekList';

export function App() {
    const dispatch = useDispatch();
    const {err} = useSelector(store => store);
    const history = useHistory();
    const [city, setCity] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords}) => {
            const {latitude, longitude} = coords;
            dispatch(fetchWeatherDayAC({latitude, longitude}))
            dispatch(fetchWeatherWeekAC({latitude, longitude}))
        })
        if (err.status) {
            history.push('/error')
        }
    }, [dispatch, err])

    const findCity = (e) => {
        e.preventDefault();
        dispatch(fetchWeatherDayAC(city))
        dispatch(fetchWeatherWeekAC(city))
        setCity('')
    };

    return (
        <div className={style.weatherContainer}>
            <div className={style.navPannel}>
                <form onSubmit={findCity}>
                    <input value={city} onChange={({target}) => setCity(target.value)} placeholder="Search city"/>
                    <button type="submit">Find</button>
                </form>
                <DayCard/>
            </div>
            <WeekList/>
        </div>
    );
}
