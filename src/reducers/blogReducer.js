import { FETCH_BLOG_POSTS } from '../actions/types';

const initialState = {
  blogPosts: [],
};

const plantsReducer = (state = initialState, action) => {

  switch (action.type) {

    case FETCH_BLOG_POSTS:
    return {
      ...state,
      blogPosts: [
        action.payload
      ]
    };

    default:
    return state
  };
};

export default plantsReducer;
