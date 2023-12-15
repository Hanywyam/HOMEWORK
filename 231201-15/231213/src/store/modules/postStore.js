const ADD_POST = "post/ADD_POST";
const ADD_COMMENT = "post/ADD_COMMENT";

export const addPost = (newPost) => ({
  type: ADD_POST,
  payload: newPost,
});

export const addComment = (postId, comment) => ({
  typ: ADD_COMMENT,
  payload: { postId, comment },
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
      const updatePostList = state.postList.map((post) =>
        post.id === postId
          ? { ...post, comment: [...post.comments, comment] }
          : post
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
