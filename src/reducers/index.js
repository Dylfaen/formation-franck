import { combineReducers } from 'redux'
import todo from './todo/reducer'
import survey from './survey.reducer'

export default combineReducers({
  todo,
  survey,
})