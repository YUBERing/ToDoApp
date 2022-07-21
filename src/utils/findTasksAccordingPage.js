export const findTasksAccordingPage = (regularPage) => {
    if (regularPage) {
        return JSON.parse(localStorage.todoArr);
    }

    return JSON.parse(localStorage.todoArr).filter(item => item.favorite === true);
}
