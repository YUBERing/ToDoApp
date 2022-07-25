export const findTasksForPage = (isRegularPage) => {
    if (isRegularPage) {
        return JSON.parse(localStorage.todoArr);
    }

    return JSON.parse(localStorage.todoArr)
        .filter(item => item.favorite === true);
}
