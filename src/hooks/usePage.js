import {useDispatch} from "react-redux";
import {useEffect} from "react";

import {findTasksAccordingPage} from "../utils/findTasksAccordingPage";

import {updateToDoList} from "../store/actionCreators/todos";

export const useTasksEditPage = ({regularPage}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (!localStorage.todoArr) {
            localStorage.todoArr = JSON.stringify([]);
        }

        dispatch(updateToDoList(findTasksAccordingPage(regularPage)));
    });
}