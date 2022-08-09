import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import Button from "../../Button";

import {SIZE_LABEL} from "../constans/magicNumber";

import {sortByDate} from "../../../utils/array";

import {nanoid} from "nanoid";
import {updateToDoList} from "../../../store/actionCreators/todos";

export const useTaskEditForm = (data, isOpen, setOpen, setData, isDisabled) => {
    const [errorMessages, setErrorMessages] = useState({
        heading: '',
        description: '',
    });

    const [form, setForm] = useState({
        id: nanoid(),
        heading: '',
        description: '',
        date: new Date(),
        favorite: false,
    });

    let errorTitle = {
        heading: '',
        description: '',
    };

    useEffect(() => {
        if (!data) {
            return
        }

        const { index, ...task } = data;

        setForm(task);
    }, []);

    const dispatch = useDispatch();

    const todosList = useSelector(state => state.todos.list);

    const validateForm = (form) => {
        const keyList = Object.keys(form);

        keyList.map((item) => {
            switch (item) {
                case 'heading':
                    if (!form[item]) {
                        errorTitle[item] = 'Введите заголовок';
                        break;
                    }

                    if (form[item].length > SIZE_LABEL.SIZE_HEADING) {
                        errorTitle[item] = 'Превышен лимит в 100 символов';
                        break;
                    }

                    if (form[item].match('[^А-Яа-яЁё ]')) {
                        errorTitle[item] = 'Допустимые сиволы А-Я, а-я и пробел';
                        break;
                    }

                    errorTitle[item] = '';
                    break;
                case 'description':
                    if (!form[item]) {
                        errorTitle[item] = 'Введите описание';
                        break;
                    }

                    if (form[item].length > SIZE_LABEL.SIZE_DESCRIPTION) {
                        errorTitle[item] = 'Превышен лимит в 1000 символов';
                        break;
                    }

                    if (form[item].match('[^А-Яа-яЁё ?!:+()]')) {
                        errorTitle[item] = 'Допустимые сиволы А-Я, а-я, ?, !, :, + и ()';
                        break;
                    }

                    errorTitle[item] = '';
                    break;
                default:
                    break;
            }
        })
    }

    function onChange(value, name){
        setForm({...form, [name]: value});
    }

    function onSubmit(form) {
        validateForm(form);
        if (!(errorTitle.heading || errorTitle.description)) {
            setErrorMessages(errorTitle);
            if (localStorage.todoArr === null) {
                localStorage.todoArr = JSON.stringify([]);
            }

            const todoList = [...JSON.parse(localStorage.todoArr), form];

            setOpen(!isOpen);
            sortByDate(todoList);

            localStorage.todoArr = JSON.stringify(todoList);
            dispatch(updateToDoList(JSON.parse(localStorage.todoArr)));

            return
        }

        setErrorMessages(errorTitle);
    }

    const onModifyCard = (form, element) => {
        validateForm(form)
        if (!(errorTitle.heading || errorTitle.description)) {
            setErrorMessages(errorTitle);
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

            return
        }

        setErrorMessages(errorTitle);
    }

    const getButton = () => {
        if (!data) {
            return (
                <Button
                    label={'Добавить'}
                    onClick={() => {onSubmit(form)}}
                    actionKey={'submit'}
                />
            )
        }

        if (isDisabled) {
            return undefined
        }

        return (
            <Button
                label={'Изменить'}
                onClick={() => {
                    onModifyCard(form, data);
                }}
                actionKey={'submit'}
            />
        )
    }

    return {
        errorMessages,
        form,
        onChange,
        onModifyCard,
        getButton,
    }
}