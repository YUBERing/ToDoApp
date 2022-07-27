import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";

import {findTasksForPage} from "../utils/findTasksForPage";

import {updateToDoList} from "../store/actionCreators/todos";
import {mockToDoList} from "../mocks/toDoList";

export const useTasksEditPage = (isRegularPage) => {
    const [isOpen, setOpen] = useState(false);

    const [isViewing, setViewing] = useState(false);

    const [data, setData] = useState(null);

    const dispatch = useDispatch();

    function onClick() {
        if (isViewing) {
            setViewing(!isViewing);
        }
        setOpen(!isOpen);
        setData(null);
    }

    useEffect(() => {
        localStorage.todoArr = JSON.stringify(mockToDoList);

        if (!localStorage.todoArr) {
            localStorage.todoArr = JSON.stringify([]);
        }

        dispatch(updateToDoList(findTasksForPage(isRegularPage)));
    });

    return {
        isOpen,
        setOpen,
        data,
        setData,
        isViewing,
        setViewing,
        onClick,
    }
}