import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { postsReducer } from './reducers/postsReducer';

const reducers = combineReducers({
	posts: postsReducer,
});

const middleware = [thunk];

const store = createStore(
	reducers,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
