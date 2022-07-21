import React from 'react';
import {useDispatch} from "react-redux";

import {findTasksAccordingPage} from "../../../utils/findTasksAccordingPage";

import {updateToDoList} from "../../../store/actionCreators/todos";

import {CATEGORY_TYPE} from "../../../constants/tasks";

import './style.scss';


function TasksCategory(props) {
    const {
        label,
        className,
        type,
        regularPage,
    } = props;

    const dispatch = useDispatch();

    const selectTask = (type) => {
        if (!localStorage.todoArr) {
            localStorage.todoArr = JSON.stringify([]);
        }

        const nowDay = new Date();

        switch(type) {
            case CATEGORY_TYPE.ALL:
                dispatch(updateToDoList(findTasksAccordingPage(regularPage)));

                break;
            case CATEGORY_TYPE.YESTERDAY:
                const yesterday = new Date(nowDay.setDate(nowDay.getDate() - 1)).toLocaleDateString();

                const yesterdayTasks = findTasksAccordingPage(regularPage).filter(
                    item => new Date(Date.parse(item.date)).toLocaleDateString() === yesterday
                );

                dispatch(updateToDoList(yesterdayTasks));
                break;
            case CATEGORY_TYPE.TODAY:
                const nowDayTasks = findTasksAccordingPage(regularPage).filter(
                    item => new Date(Date.parse(item.date)).toLocaleDateString() === nowDay.toLocaleDateString()
                )

                dispatch(updateToDoList(nowDayTasks));
                break;
            case CATEGORY_TYPE.FOR_MONTH:
                const nowMonth = new Date().getMonth();

                const nowYear = new Date().getFullYear();

                const nowMonthTasks = findTasksAccordingPage(regularPage).filter(
                    item => new Date(Date.parse(item.date)).getMonth() === nowMonth && new Date(Date.parse(item.date)).getFullYear() === nowYear
                )
                dispatch(updateToDoList(nowMonthTasks));
                break;
        }
    }

    return (
        <div className={className} key={type} onClick = {() => {selectTask(type)}}>
            {label}
        </div>
    )
}

export default TasksCategory;