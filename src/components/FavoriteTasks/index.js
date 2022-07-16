import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

import Calendar from "react-calendar";
import {CATEGORY_TYPE} from "../../constants/tasks";
import ViewedTasks from "../ViewedTasks";
import {updateToDoList} from "../../store/actionCreators/todos";

import './style.scss'
import CalendarMenu from "../CalendarMenu";

function FavoriteTasks() {
    const dispatch = useDispatch();

    useEffect(() => {
        if (!localStorage['todoArr']) {
            localStorage.todoArr = JSON.stringify([]);
        }

        const toDoList = JSON.parse(localStorage.todoArr)

        const favoriteTasks = toDoList.filter(
            item => item.chosen === true
        )
        dispatch(updateToDoList(favoriteTasks))
    })

    const selectTask = (type) => {
        if (!localStorage['todoArr']) {
            localStorage.todoArr = JSON.stringify([]);
        }

        const toDoList = JSON.parse(localStorage.todoArr).filter(item => item.chosen === true);

        const nowDay = new Date();

        switch(type) {
            case CATEGORY_TYPE.ALL:
                dispatch(updateToDoList(toDoList));

                break;
            case CATEGORY_TYPE.YESTERDAY:
                const yesterday = new Date(nowDay.setDate(nowDay.getDate() - 1)).toLocaleDateString();

                const yesterdayTasks = toDoList.filter(
                    item => new Date(Date.parse(item.date)).toLocaleDateString() === yesterday
                )

                dispatch(updateToDoList(yesterdayTasks));
                break;
            case CATEGORY_TYPE.TODAY:
                const nowDayTasks = toDoList.filter(
                    item => new Date(Date.parse(item.date)).toLocaleDateString() === nowDay.toLocaleDateString()
                )

                dispatch(updateToDoList(nowDayTasks));
                break;
            case CATEGORY_TYPE.FOR_MONTH:
                const nowMonth = new Date().getMonth();

                const nowYear = new Date().getFullYear();

                const nowMonthTasks = toDoList.filter(
                    item => new Date(Date.parse(item.date)).getMonth() === nowMonth && new Date(Date.parse(item.date)).getFullYear() === nowYear
                )
                dispatch(updateToDoList(nowMonthTasks));
                break;
        }
    }

    const onClickDay = (value) => {
        if (!localStorage['todoArr']) {
            localStorage.todoArr = JSON.stringify([]);
        }

        const toDoList = JSON.parse(localStorage.todoArr);

        const DayTasks = toDoList.filter(
            item => new Date(Date.parse(item.date)).toLocaleDateString() === value.toLocaleDateString() &&
                item.chosen === true
        )

        dispatch(updateToDoList(DayTasks));
    }

    const tileDayThisTask = ({activeStartDate, date, view}) =>
    {
        if (!localStorage['todoArr']) {
            localStorage.todoArr = JSON.stringify([]);
        }

        const toDoList = JSON.parse(localStorage.todoArr);

        const item = toDoList.find(
            item => new Date(Date.parse(item.date)).toLocaleDateString() === date.toLocaleDateString() &&
                item.chosen === true
        )

        return item !== undefined ? 'calendar__day' : null
    }

    return (
        <div className="App">
            <div className='toDoList'>
                <CalendarMenu
                    onClickDay={onClickDay}
                    tileDayThisTask={tileDayThisTask}
                />
                <ViewedTasks selectTask={selectTask} regularPage={false}/>
            </div>
        </div>
    );
}

export default FavoriteTasks