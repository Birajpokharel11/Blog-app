import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

const reducer = combineReducers({
  posts: postsReducer,
  users: usersReducer
});

export default createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);
