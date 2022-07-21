import {
  TODOS_CHOSEN_TASK_LIST,
  TODOS_DELETE_TASK_LIST,
  TODOS_MODIFY_TASK_LIST,
  TODOS_UPDATE_TASK_LIST
} from "../../actions/todos"

const initialState = {todos: []};

function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
  return maxId + 1
}

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case TODOS_UPDATE_TASK_LIST: {
      return {
        ...state,
        todos: action.payload,
      }
    }
    case TODOS_DELETE_TASK_LIST: {
      return {
        ...state,
        todos: state.todos.filter((item, index) => index !== action.payload
        )
      }
    }
    case TODOS_MODIFY_TASK_LIST: {
      return {
        ...state,
        todos: state.todos.map((item, index) => {
          if (index === action.payload.index) {
            return action.payload.form
          }

          return item
        })
      }
    }
    case TODOS_CHOSEN_TASK_LIST: {
      return {
        ...state,
        todos: state.todos.map((item, index) => {
          if (index === action.payload) {
            item.favorite = !item.favorite

            return item
          }

          return item
        })
      }
    }
    case 'todos/todoAdded': {
      // Can return just the new todos array - no extra object around it
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false,
        },
      ]
    }
    case 'todos/todoToggled': {
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo
        }

        return {
          ...todo,
          completed: !todo.completed,
        }
      })
    }
    case 'todos/colorSelected': {
      const { color, todoId } = action.payload
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo
        }

        return {
          ...todo,
          color,
        }
      })
    }
    case 'todos/todoDeleted': {
      return state.filter((todo) => todo.id !== action.payload)
    }
    case 'todos/allCompleted': {
      return state.map((todo) => {
        return { ...todo, completed: true }
      })
    }
    case 'todos/completedCleared': {
      return state.filter((todo) => !todo.completed)
    }
    default:
      return state
  }
}