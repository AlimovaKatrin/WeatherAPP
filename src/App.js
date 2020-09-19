import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {fetchWeatherDayAC, fetchWeatherWeekAC} from "./redux/actionCreators";
import style from './App.module.scss';
import {DayCard} from './components/DayCard/DayCard';
import {WeekList} from './components/WeekList/WeekList';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords}) => {
            const {latitude, longitude} = coords;
            dispatch(fetchWeatherDayAC({latitude, longitude}))
            dispatch(fetchWeatherWeekAC({latitude, longitude}))
        })
    }, [dispatch])
    return (
        <div>
            <div className={style.navPannel}>
                <form>
                    <input/>
                    <button>Find</button>
                </form>
                <DayCard/>
            </div>
            <WeekList/>
        </div>
    );
}

export default App;
