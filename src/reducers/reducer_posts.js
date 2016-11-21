import {
  FETCH_POSTS,
  FETCH_SINGLE_POST
} from '../actions/types';

const INITIAL_STATE = {
  all: [],
  post: null
};

export default function(state=INITIAL_STATE,action){
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        all: action.payload.data
      };
    case FETCH_SINGLE_POST:
      return {
        ...state,
        post: action.payload.data
      };
    default:
      return state;
  }
}
