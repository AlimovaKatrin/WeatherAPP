import React from 'react';
import style from './HoursBlock.module.scss';
import {ShortCard} from '../ShortCard/ShortCard';

export const HoursBlock = ({day, date}) => {
    return (<div className={style.dayContainer}>
        {date && date}

        <div className={style.hoursContainer}>
            {day && day.map(hour =>
                <ShortCard key={hour.dt_txt} hours={hour}/>
            )}
        </div>
    </div>)
};