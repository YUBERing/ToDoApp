import React from 'react';
import {useDispatch} from "react-redux";

import {findTasksForPage} from "../../../utils/findTasksForPage";

import {updateToDoList} from "../../../store/actionCreators/todos";

import {CATEGORY_TYPE} from "../../../constants/tasks";

import './style.scss';
import {history} from "../../../store/store";


function SelectionFieldCategory(props) {
    const {
        label,
        type,
        isRegularPage,
    } = props;

    const dispatch = useDispatch();

    const selectTasks = (type) => {
        if (!localStorage.todoArr) {
            localStorage.todoArr = JSON.stringify([]);
        }

        const nowDay = new Date();

        switch(type) {
            case CATEGORY_TYPE.ALL:
                dispatch(updateToDoList(findTasksForPage(isRegularPage)));
                history.push(`${ isRegularPage
                    ? ''
                    : '/favorite/'
                }${type}`)
                break;
            case CATEGORY_TYPE.YESTERDAY:
                const yesterday = new Date(nowDay.setDate(nowDay.getDate() - 1)).toLocaleDateString();

                const yesterdayTasks = findTasksForPage(isRegularPage).filter(
                    item => new Date(Date.parse(item.date)).toLocaleDateString() === yesterday
                );

                dispatch(updateToDoList(yesterdayTasks));
                history.push(`${ isRegularPage
                    ? ''
                    : '/favorite/'
                }${type}`)
                break;
            case CATEGORY_TYPE.TODAY:
                const nowDayTasks = findTasksForPage(isRegularPage).filter(
                    item => new Date(Date.parse(item.date)).toLocaleDateString() === nowDay.toLocaleDateString()
                );

                dispatch(updateToDoList(nowDayTasks));
                history.push(`${ isRegularPage
                    ? ''
                    : '/favorite/'
                }${type}`)
                break;
            case CATEGORY_TYPE.FOR_MONTH:
                const nowMonth = new Date().getMonth();

                const nowYear = new Date().getFullYear();

                const nowMonthTasks = findTasksForPage(isRegularPage).filter(
                    item => new Date(Date.parse(item.date)).getMonth() === nowMonth && new Date(Date.parse(item.date)).getFullYear() === nowYear
                );

                dispatch(updateToDoList(nowMonthTasks));
                history.push(`${ isRegularPage
                    ? ''
                    : '/favorite/'
                }${type}`)
                break;
            default:
                break;
        }
    }

    const getClassName = (type) => {
        const arrPath =  history.location.pathname.split('/');

        if (arrPath.includes(type)) {
            return ' selection-field__category_active'
        }

        return ''
    }

    return (
        <div
            className={`selection-field__category${getClassName(type)}`}
            onClick = {() => {selectTasks(type)}}
        >
            {label}
        </div>
    )
}

export default SelectionFieldCategory;