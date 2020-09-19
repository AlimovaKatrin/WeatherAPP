import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchWeatherDayAC, fetchWeatherWeekAC} from './redux/actionCreators';
import style from './App.module.scss';
import {DayCard} from './components/DayCard/DayCard';
import {WeekList} from './components/WeekList/WeekList';

function App() {
    const dispatch = useDispatch();
    const {err} = useSelector(store => store);
    const [city, setCity] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords}) => {
            const {latitude, longitude} = coords;
            dispatch(fetchWeatherDayAC({latitude, longitude}))
            dispatch(fetchWeatherWeekAC({latitude, longitude}))
        })
    }, [dispatch])

    const findCity = (e) => {
        e.preventDefault();
        dispatch(fetchWeatherDayAC(city))
        dispatch(fetchWeatherWeekAC(city))
        setCity('')
    };

    return (
        <div className={style.weatherContainer}>
            {err.status ? err.message :
                <div>

                    <div className={style.navPannel}>
                        <form onSubmit={findCity}>
                            <input value={city} onChange={({target}) => setCity(target.value)}
                                   placeholder="Search city"/>
                            <button type="submit">Find</button>
                        </form>
                        <DayCard/>
                    </div>
                    <WeekList/>
                </div>
            }
        </div>
    );
}

export default App;
