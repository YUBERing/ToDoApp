import { combineReducers } from 'redux'

import todosReducer from './reducers/todos/todosSlice'

const rootReducer = combineReducers({
  todos: todosReducer,
});

export default rootReducer