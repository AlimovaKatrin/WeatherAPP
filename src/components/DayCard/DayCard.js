import React, {useEffect, useState} from 'react';
import {tempConventer} from '../../locals';
import {useSelector} from 'react-redux';
import style from './DayCard.module.scss'

export const DayCard = () => {
    const {main, sys, name, weather, wind} = useSelector(store => store.day);
    const [briefInfo, setBrief] = useState(null);

    useEffect(() => {
        if (weather) {
            const [briefInfo] = weather;
            setBrief(briefInfo)
        }
    }, [weather])

    return (
        <div className={style.card}>
            <div className={style.name}>
                Your region :
                {name ? <strong> {name} </strong> : null}
            </div>

            {main && briefInfo ? <div className={style.cardDetails}>
                <div className={style.briefInfo}>
                    <div>
                        Category: {briefInfo.main}
                        <br/>
                        {briefInfo.description}
                    </div>
                    <div>
                        Sunrise: {sys.sunrise}
                    </div>
                    <div>
                        Sunset: {sys.sunset}
                    </div>
                </div>
                <div className={style.temperatures}>
                    Current temp: {tempConventer(main.temp)}
                    <sub>
                        Max temp during day: {tempConventer(main.temp_max)}
                    </sub>
                </div>
                <div className={style.additionalInfo}>
                    Humidity: {main.humidity}
                    Wind: {wind.speed}
                </div>


            </div> : null}

        </div>
    )
};