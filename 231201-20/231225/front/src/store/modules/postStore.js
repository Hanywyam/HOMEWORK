const ADD_POST = "post/ADD_POST";
const ADD_COMMENT = "post/ADD_COMMENT";
const DELETE_POST = "post/DELETE_POST";
const UPDATE_POST = "post/UPDATE_POST";

export const addPost = (newPost) => ({
  type: ADD_POST,
  payload: newPost,
});

export const addComment = (postId, comment) => ({
  type: ADD_COMMENT,
  payload: { postId, comment },
});

export const deletePost = (newPostId, updatedPostList) => ({
  type: DELETE_POST,
  payload: { newPostId, updatedPostList },
});

export const updatePost = (updatePostId, updatedPost) => ({
  type: UPDATE_POST,
  payload: { updatePostId, updatedPost },
});

const initialState = {
  postList: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        postList: [...state.postList, action.payload],
      };
    case ADD_COMMENT:
      const { postId, comment } = action.payload;
      const addPostList = state.postList.map((post) =>
        post.id === postId
          ? { ...post, comment: [...post.comments, comment] }
          : post
      );
      return {
        ...state,
        postList: addPostList,
      };
    case DELETE_POST:
      const { newPostId } = action.payload;
      const updatedPostList = state.postList.filter(
        (post) => post.id !== newPostId
      );

      return {
        ...state,
        postList: updatedPostList,
      };
    case UPDATE_POST:
      const { updatePostId, updatedPost } = action.payload;
      const updatePostList = state.postList.map((post) =>
        post.id === updatePostId ? { ...post, ...updatedPost } : post
      );
      return {
        ...state,
        postList: updatePostList,
      };
    default:
      return state;
  }
};

export default postReducer;
