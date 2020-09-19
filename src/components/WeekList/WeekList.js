import React from 'react';
import {useSelector} from 'react-redux';
import {DayBlock} from '../DayBlock/DayBlock';
import style from './WeekList.module.scss';

export const WeekList = () => {
    const list = useSelector(store => store.week);
    const dates = Object.keys(list);
    return (<div className={style.weekContainer}>
        {dates ?
            dates.map(day => <DayBlock key={day} date={day} day={list[day]}/>) : null}
    </div>)
};