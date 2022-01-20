import { GET_POSTS } from '../types';

export const get_posts = (posts) => (dispatch) => {
	try {
		dispatch({
			type: GET_POSTS,
			payload: {
				posts: posts,
			},
		});
	} catch (error) {
		console.log(error);
	}
};
