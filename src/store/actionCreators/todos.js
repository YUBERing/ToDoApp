import { TODOS_UPDATE_TASK_LIST } from "../actions/todos"

export const updateToDoList = (payload) => {
        return {
                type: TODOS_UPDATE_TASK_LIST,
                payload
        }
}