import {TODOS_UPDATE_TASK_LIST} from "../../actions/todos"

const initialState = {list: []};

export default function todosReducer(
    state = initialState,
    action
) {
  switch (action.type) {
    case TODOS_UPDATE_TASK_LIST: {
      return {
        ...state,
        list: action.payload,
      }
    }
    default:
      return state
  }
}