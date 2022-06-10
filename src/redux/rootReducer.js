import {combineReducers} from 'redux'

export const rootReducer = combineReducers({
  posts: postsReducer,
  app: appReducer
})