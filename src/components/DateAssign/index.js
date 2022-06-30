import {React, useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import './style.scss';

function DateAssign(props) {
    const {
        label,
        value,
        onChange
    } = props;

    return (
        <div className='datePlace'>
            <div>{label}</div>
            <DatePicker
                dateFormat='dd.MM.yyyy'
                selected={Date.parse(value)}
                onChange={(date) => {onChange(date, 'date')}}
            />
        </div>
    )
};

export default DateAssign;