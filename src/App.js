import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchWeatherDayAC, fetchWeatherWeekAC} from "./redux/actionCreators";
import style from './App.module.scss';

function App() {
    const dispatch = useDispatch();
    const {day,week} = useSelector(store => store);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords}) => {
            const {latitude, longitude} = coords;
            dispatch(fetchWeatherDayAC({latitude, longitude}))
            dispatch(fetchWeatherWeekAC({latitude,longitude}))
        })
    }, [dispatch])
    return (
        <div>
            <form>
                <input/>
                <button>Find</button>
            </form>
            <div className={style.weatherContainer}>
                <div>
                    DAY CARD
                    <pre>
                {JSON.stringify(day, null, 2)}
                </pre>
                </div>
                <div>
                    WEEK LIST
                    {JSON.stringify(week, null, 2)}
                </div>
            </div>
        </div>
    );
}

export default App;
