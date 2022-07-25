import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";

import {findTasksForPage} from "../utils/findTasksForPage";

import {updateToDoList} from "../store/actionCreators/todos";

export const useTasksEditPage = (isRegularPage) => {
    const [isOpen, setOpen] = useState(false);

    const [data, setData] = useState(null);

    const dispatch = useDispatch();

    function onClick() {
        setOpen(!isOpen);

    }

    useEffect(() => {
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
        onClick,
    }
}