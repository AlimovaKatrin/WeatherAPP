import React from 'react';
import {useSelector} from 'react-redux';
import {HoursBlock} from './HoursBlock';

export const WeekList = () => {
    const list = useSelector(store => store.week);
    const dates = Object.keys(list);
    return (
        <div>
            {dates ?
                dates.map(day => <HoursBlock key={day} date={day} day={list[day]}/>) : null}
        </div>)
};