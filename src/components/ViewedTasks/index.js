import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import Header from "../Header";
import Button from "../Button";
import TaskEdit from "../TaskEdit";
import ItemToDoList from "./ItemToDoList";
import {chosenToDoItem, deleteToDoItem, modifyToDoItem, updateToDoList} from "../../store/actionCreators/todos";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {List, AutoSizer} from "react-virtualized";

import './style.scss'
import 'react-virtualized/styles.css';


function ViewedTasks(props) {
    const {
        selectTask,
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

    const onChecked = (element) => {
        const toDoList = JSON.parse(localStorage.todoArr);

        const indexLocalStorage = toDoList.findIndex(item => item.id === element.id)

        toDoList[indexLocalStorage].chosen = !toDoList[indexLocalStorage].chosen;
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
        todoList.sort((firstItem, secondItem) => {
            const a = new Date(Date.parse(firstItem.date))

            const b = new Date(Date.parse(secondItem.date))

            if (a > b) return 1;
            if (a < b) return -1;
            return 0;
        })
        localStorage.todoArr = JSON.stringify(todoList)
        dispatch(updateToDoList(JSON.parse(localStorage.todoArr)));
    }

    const onModifyCard = (form, element) => {
        const toDoList = JSON.parse(localStorage.todoArr);

        const indexLocalStorage = toDoList.findIndex(item => item.id === element.id)

        toDoList[indexLocalStorage] = form;
        toDoList.sort((firstItem, secondItem) => {
            const a = new Date(Date.parse(firstItem.date))

            const b = new Date(Date.parse(secondItem.date))

            if (a > b) return 1;
            if (a < b) return -1;
            return 0;
        })

        localStorage.todoArr = JSON.stringify(toDoList);
        const indexTodos = todos.todos.findIndex(item => item.id === element.id)

        dispatch(modifyToDoItem({index: indexTodos, form: form}));
        setOpen(!isOpen);
        setData(null);
    }

    const getToDoList = ({index}) => {
            return (
                <ItemToDoList
                    item={todos.todos[index]}
                    onDeleteItem={onDeleteCard}
                    onChangeItem={onChangeCard}
                    onChecked={onChecked}
                />
            )
    }

    return (
        <div className='viewedTasks'>
            <div className={'selection_addition_block'}>
                <Header funcSelectTask={selectTask} regularPage={regularPage}/>
                {
                    regularPage &&

                    <Button
                        label={<AddCircleOutlineIcon sx={{fontSize: 50}}/>}
                        onClick={onClick}
                        className={'addToDo'}
                    />
                }
            </div>
            <div className='viewedToDoList'>
                <AutoSizer>
                    {({height, width}) => (
                    <List
                        width={width}
                        height={height}
                        rowCount={todos.todos.length}
                        rowHeight={50}
                        rowRenderer={getToDoList}
                    />
                    )}
                </AutoSizer>
            </div>
            <div className='place__addToDo'>
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