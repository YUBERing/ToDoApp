import {mockToDoList} from "../mocks/toDoList";

export const findTasksForPage = (isRegularPage) => {
    localStorage.todoArr = JSON.stringify(mockToDoList);

    if (!localStorage.todoArr) {
        localStorage.todoArr = JSON.stringify([]);
    }

    if (isRegularPage) {
        return JSON.parse(localStorage.todoArr);
    }

    return JSON.parse(localStorage.todoArr)
        .filter(item => item.favorite === true);
}
