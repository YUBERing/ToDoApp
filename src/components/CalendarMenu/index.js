import React, {useState} from "react";
import Calendar from "react-calendar";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import './style.scss'
import green from "@mui/material/colors/green";

function CalendarMenu(props) {
    const {
        onClickDay,
        tileDayThisTask,
    } = props

    const [value, onChange] = useState(new Date());

    return (
        <div className={'calendar_menu'}>
            <CalendarMonthIcon sx={{fontSize: 50}}/>
            <div className='calendar'>
                <Calendar
                    onChange={onChange}
                    onClickDay={onClickDay(value)}
                    tileClassName={tileDayThisTask}
                    value={value}
                />
            </div>
        </div>
    )
}

export default CalendarMenu