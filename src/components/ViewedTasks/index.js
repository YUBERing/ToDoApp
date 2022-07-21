import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import Header from "../Header";
import Button from "../Button";
import TaskEdit from "../TaskEdit";
import ViewedTasksItemToDoList from "./ItemToDoList";
import {List, AutoSizer} from "react-virtualized";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import {sortByDate} from "../../utils/array";

import {chosenToDoItem, deleteToDoItem, modifyToDoItem, updateToDoList} from "../../store/actionCreators/todos";

import './style.scss'
import 'react-virtualized/styles.css';



function ViewedTasks(props) {
    const {
        regularPage,
    } = props

    const todos = useSelector(state => state.todos);

    const [isOpen, setOpen] = useState(false);

    const [data, setData] = useState(null);

    const dispatch = useDispatch();

    const onDeleteCard = (element) => {
        const toDoList = JSON.parse(localStorage.todoArr);

        const indexLocalStorage = toDoList.findIndex(item => item.id === element.id)

        toDoList.splice(indexLocalStorage, 1);
        localStorage.todoArr = JSON.stringify(toDoList)
        const indexTodos = todos.todos.findIndex(item => item.id === element.id)

        dispatch(deleteToDoItem(indexTodos));
    }

    const onChangeCard = (item, index) => {
        setOpen(!isOpen);
        setData({ ...item, index });
    }

    const onCheck = (element) => {
        const toDoList = JSON.parse(localStorage.todoArr);

        const indexLocalStorage = toDoList.findIndex(item => item.id === element.id)

        toDoList[indexLocalStorage].favorite = !toDoList[indexLocalStorage].favorite;
        localStorage.todoArr = JSON.stringify(toDoList);
        const indexTodos = todos.todos.findIndex(item => item.id === element.id)

        dispatch(chosenToDoItem(indexTodos));
    }

    function onClick() {
        setOpen(!isOpen);
        setData(null);
    }

    function onSubmit(form) {
        if (localStorage.todoArr === null) {
            localStorage.todoArr = JSON.stringify([]);
        }

        const todoList = [...JSON.parse(localStorage.todoArr), form];

        setOpen(!isOpen);
        sortByDate(todoList);

        localStorage.todoArr = JSON.stringify(todoList)
        dispatch(updateToDoList(JSON.parse(localStorage.todoArr)));
    }

    const onModifyCard = (form, element) => {
        const toDoList = JSON.parse(localStorage.todoArr);

        const indexLocalStorage = toDoList.findIndex(item => item.id === element.id)

        toDoList[indexLocalStorage] = form;
        sortByDate(toDoList);

        localStorage.todoArr = JSON.stringify(toDoList);
        const indexTodos = todos.todos.findIndex(item => item.id === element.id)

        dispatch(modifyToDoItem({index: indexTodos, form: form}));
        setOpen(!isOpen);
        setData(null);
    }

    const getToDoList = ({index}) => {
            return (
                <ViewedTasksItemToDoList
                    item={todos.todos[index]}
                    className={'viewed-tasks__item-to-do-list'}
                    onDeleteItem={onDeleteCard}
                    onChangeItem={onChangeCard}
                    onCheck={onCheck}
                />
            )
    }

    return (
        <div className='viewed-tasks'>
            <div className={'viewed-tasks__header'}>
                <Header regularPage={regularPage}/>
                {
                    regularPage &&
                    <Button
                        label={<AddCircleOutlineIcon sx={{fontSize: 50}}/>}
                        onClick={onClick}
                        className={'add-to-do'}
                    />
                }
            </div>
            <div className='viewed-tasks__to-do-list'>
                <AutoSizer>
                    {({height, width}) => (
                    <List
                        width={width}
                        height={height}
                        rowCount={todos.todos.length}
                        rowHeight={60}
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
    )
}

export default ViewedTasks;