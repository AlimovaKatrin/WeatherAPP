import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {fetchWeatherDayAC} from "./redux/actionCreators";

function App() {
    const dispatch = useDispatch();
    console.log(process.env)
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords}) => {
            const {latitude, longitude} = coords;
            dispatch(fetchWeatherDayAC({latitude, longitude}))
        })
    }, [dispatch])
    return (
        <div>
            App
        </div>
    );
}

export default App;
