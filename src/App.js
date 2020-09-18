import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchWeatherDayAC, fetchWeatherWeekAC} from "./redux/actionCreators";
import style from './App.module.scss';
import {DayCard} from './components/DayCard/DayCard';

function App() {
    const dispatch = useDispatch();
    // const {week} = useSelector(store => store);
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords}) => {
            const {latitude, longitude} = coords;
            dispatch(fetchWeatherDayAC({latitude, longitude}))
            dispatch(fetchWeatherWeekAC({latitude, longitude}))
        })
    }, [dispatch])
    return (
        <div>
            <form>
                <input/>
                <button>Find</button>
            </form>
            <div className={style.weatherContainer}>
                <DayCard/>

                <div>
                    WEEK LIST
                    {/*{JSON.stringify(week, null, 2)}*/}
                </div>
            </div>
        </div>
    );
}

export default App;
