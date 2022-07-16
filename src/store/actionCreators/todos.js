import { TODOS_CHOSEN_TASK_LIST,
        TODOS_DELETE_TASK_LIST,
        TODOS_MODIFY_TASK_LIST,
        TODOS_UPDATE_TASK_LIST
} from "../actions/todos"

export const updateToDoList = (payload) => {
        return {
                type: TODOS_UPDATE_TASK_LIST,
                payload
        }
}

export const deleteToDoItem = (payload) => {
        return {
                type: TODOS_DELETE_TASK_LIST,
                payload
        }
}

export const modifyToDoItem = (payload) => {
        return {
                type: TODOS_MODIFY_TASK_LIST,
                payload
        }
}

export const chosenToDoItem = (payload) => {
        return {
                type: TODOS_CHOSEN_TASK_LIST,
                payload
        }
}