import React from "react";
import {useDispatch, useSelector} from "react-redux";

import SelectionField from "../SelectionField";
import TaskEdit from "../TaskEdit";
import ViewedTasksItemToDoList from "./ItemToDoList";
import {List, AutoSizer} from "react-virtualized";

import {sortByDate} from "../../utils/array";

import {updateToDoList} from "../../store/actionCreators/todos";

import './style.scss'
import 'react-virtualized/styles.css';

function ViewedTasks(props) {
    const {
        isRegularPage,
        data,
        setData,
        isOpen,
        setOpen,
        onClick,
    } = props

    const todosList = useSelector(state => state.todos.list);

    const dispatch = useDispatch();

    const onDeleteCard = (element) => {
        const toDoList = JSON.parse(localStorage.todoArr);

        const indexLocalStorage = toDoList.findIndex(item => item.id === element.id);

        toDoList.splice(indexLocalStorage, 1);
        localStorage.todoArr = JSON.stringify(toDoList);
        const indexTodos = todosList.findIndex(item => item.id === element.id);

        dispatch(updateToDoList(
            todosList.filter((item, index) => index !== indexTodos
            )));
    }

    const onChangeCard = (item, index) => {
        setOpen(!isOpen);
        setData({ ...item, index });
    }

    const onCheck = (element) => {
        const toDoList = JSON.parse(localStorage.todoArr);

        const indexLocalStorage = toDoList.findIndex(item => item.id === element.id);

        toDoList[indexLocalStorage].favorite = !toDoList[indexLocalStorage].favorite;
        localStorage.todoArr = JSON.stringify(toDoList);
        const indexTodos = todosList.findIndex(item => item.id === element.id)

        dispatch(updateToDoList(todosList.map((item, index) => {
            if (index === indexTodos) {
                item.favorite = !item.favorite

                return item
            }

            return item
        })));
    }

    function onSubmit(form) {
        if (localStorage.todoArr === null) {
            localStorage.todoArr = JSON.stringify([]);
        }

        const todoList = [...JSON.parse(localStorage.todoArr), form];

        setOpen(!isOpen);
        sortByDate(todoList);

        localStorage.todoArr = JSON.stringify(todoList);
        dispatch(updateToDoList(JSON.parse(localStorage.todoArr)));
    }

    const onModifyCard = (form, element) => {
        const toDoList = JSON.parse(localStorage.todoArr);

        const indexLocalStorage = toDoList.findIndex(item => item.id === element.id);

        toDoList[indexLocalStorage] = form;
        sortByDate(toDoList);

        localStorage.todoArr = JSON.stringify(toDoList);
        const indexTodos = todosList.findIndex(item => item.id === element.id);

        dispatch(updateToDoList(todosList.map((item, index) => {
            if (index === indexTodos) {
                return form
            }

            return item
        })));

        setOpen(!isOpen);
        setData(null);
    }

    const getToDoList = ({key, index, style}) => {
            return (
                <ViewedTasksItemToDoList
                    key={key}
                    item={todosList[index]}
                    className={'viewed-tasks__item-to-do-list'}
                    onDeleteItem={onDeleteCard}
                    onChangeItem={onChangeCard}
                    onCheck={onCheck}
                    style={{
                        width: style.width,
                        position: style.position,
                        left: style.left,
                        top: style.top
                    }}
                />
            );
    }

    return (
        <div className='viewed-tasks'>
            <div className={'viewed-tasks__header'}>
                <SelectionField isRegularPage={isRegularPage}/>
            </div>
            <div className='viewed-tasks__to-do-list'>
                <AutoSizer>
                    {({height, width}) => (
                    <List
                        width={width}
                        height={height}
                        rowCount={todosList.length}
                        rowHeight={({index}) => {
                            if (index === todosList.length-1) {
                                return 80
                            }

                            return 90
                        }}
                        rowRenderer={getToDoList}
                    />
                    )}
                </AutoSizer>
            </div>
            <div className='viewed-tasks__modal-window-place'>
                {
                    isOpen &&
                    <TaskEdit
                        onClose={onClick}
                        onSubmit={onSubmit}
                        data={data}
                        onModify={onModifyCard}
                    />
                }
            </div>
        </div>
    );
}

export default ViewedTasks;