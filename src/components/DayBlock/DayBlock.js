import React from 'react';
import style from './DayBlock.module.scss';
import {ShortCard} from '../ShortCard/ShortCard';

export const DayBlock = ({day, date}) => {
    return (<div className={style.dayContainer}>
        {date && date}
        <div className={style.hoursContainer}>
            {day && day.map(hour =>
                <ShortCard key={hour.dt_txt} hours={hour}/>
            )}
        </div>
    </div>)
};