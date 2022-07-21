import React, {useState} from "react";
import {useDispatch} from "react-redux";

import Calendar from "react-calendar";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import {findTasksAccordingPage} from "../../utils/findTasksAccordingPage";

import {updateToDoList} from "../../store/actionCreators/todos";

import './style.scss'
import 'react-calendar/dist/Calendar.css';

function CalendarMenu(props) {
    const {
        regularPage,
    } = props;

    const dispatch = useDispatch();

    const [value, onChange] = useState(new Date());

    const onClickDay = (value) => {
        if (!localStorage.todoArr) {
            localStorage.todoArr = JSON.stringify([]);
        }

        const dayTasks = findTasksAccordingPage(regularPage).filter(
            item => new Date(Date.parse(item.date))
                .toLocaleDateString() === value.toLocaleDateString()
        )

        dispatch(updateToDoList(dayTasks));
    }

    const tileDayThisTask = ({activeStartDate, date, view}) =>
    {
        if (!localStorage.todoArr) {
            localStorage.todoArr = JSON.stringify([]);
        }

        const item = findTasksAccordingPage(regularPage)
            .find(item => new Date(Date.parse(item.date))
                .toLocaleDateString() === date.toLocaleDateString());

        return item !== undefined ? 'calendar_day' : null
    }

    return (
        <div className={'calendar-menu'}>
            <CalendarMonthIcon sx={{fontSize: 50}}/>
            <div className='calendar-menu__calendar'>
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