import { combineReducers } from 'redux'

import todosReducer from './reducers/todos/todosSlice'
import filtersReducer from './reducers/filters/filtersSlice'

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  todos: todosReducer,
  filters: filtersReducer,
})

export default rootReducer