import React, {useEffect, useState} from 'react';
import {tempConventer, timeConventer, weatherImg} from '../../utils/locals';
import style from './ShortCard.module.scss'

export const ShortCard = ({hours}) => {
    const {main,  weather, dt} =hours
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
                {timeConventer(dt).getUTCHours() === 0 ? 'Midnight' : timeConventer(dt).getUTCHours() + ' hours'}
            </div>
            {main && briefInfo ? <div className={style.cardDetails}>
                    <img src={weatherImg(briefInfo.main.toLocaleLowerCase())} alt="img"/>
                    <ul>
                    <li>{briefInfo.main}</li>
                    <li>{tempConventer(main.temp)}  &#8451;</li>
                    </ul>
            </div> : null}
        </div>
    )
};
