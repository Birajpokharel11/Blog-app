import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  console.log('about to fetch posts');
  await dispatch(fetchPosts());
  console.log(getState().posts);
  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  userIds.forEach((id) => dispatch(fetchUser(id)));
  console.log(`${userIds} : userid`);
};

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  console.log("i'm fetching user");

  const response = await jsonPlaceholder.get(`/users/${id}`);
  console.log(response);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};
