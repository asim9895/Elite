import { GET_POSTS } from '../types';

let initialState = {
	posts: [],
};

export const postsReducer = (state = initialState, actions) => {
	switch (actions.type) {
		case GET_POSTS:
			return {
				...state,
				posts: actions.payload.posts,
			};
		default:
			return state;
	}
};
