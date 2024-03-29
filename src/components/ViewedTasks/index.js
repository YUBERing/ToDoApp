import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import SelectionField from "../SelectionField";
import TaskEdit from "../TaskEdit";
import ViewedTasksItemToDoList from "./ItemToDoList";
import {List, AutoSizer} from "react-virtualized";
import Button from "../Button";
import ViewedTasksPaginateList from "./PaginateList";

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
        isViewing,
        setViewing,
    } = props;

    const todosList = useSelector(state => state.todos.list);

    const dispatch = useDispatch();

    const[isPagination, setPagination] = useState(true);

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

    const onViewing = (item, index) => {
        setOpen(!isOpen);
        setViewing(!isViewing);
        setData({ ...item, index });
    }

    const getToDoItem = ({key, index, style}) => {
            return (
                <ViewedTasksItemToDoList
                    key={key}
                    item={todosList[index]}
                    onDeleteItem={onDeleteCard}
                    onChangeItem={onChangeCard}
                    onCheck={onCheck}
                    onClick={onViewing}
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
            <Button
                label={'Пагинация?'}
                onClick={() => {setPagination(!isPagination)}}
                isPagination={isPagination}
                actionKey={'pagination'}
            />
            <div className='viewed-tasks__to-do-list'>
                {
                    isPagination
                    ? <AutoSizer>
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
                                rowRenderer={getToDoItem}
                            />)}
                    </AutoSizer>
                    : <ViewedTasksPaginateList
                        itemsPerPage={5}
                        list={todosList}
                        onDeleteCard={onDeleteCard}
                        onChangeCard={onChangeCard}
                        onCheck={onCheck}
                        onViewing={onViewing}
                        />
                }
            </div>
            <div className='viewed-tasks__modal-window-place'>
                {
                    isOpen &&
                    <TaskEdit
                        onClose={onClick}
                        data={data}
                        isDisabled={isViewing}
                        setData={setData}
                        isOpen={isOpen}
                        setOpen={setOpen}
                    />
                }
            </div>
        </div>
    );
}

export default ViewedTasks;