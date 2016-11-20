import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';

const root_url = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=Ajsdno2fm$mkadlaksd';

export function fetchPosts() {
  const request = axios.get(`${root_url}/posts${API_KEY}`);
  console.log("Inisde fetchPosts action", request);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(fields) {
  const request = axios.post(`${root_url}/posts${API_KEY}` ,fields);
  return {
    type: CREATE_POST,
    payload: request
  };
}
