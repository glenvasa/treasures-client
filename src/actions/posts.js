import * as api from "../api/index";

// Action Creators
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    // you get more info if you log out the entire error object instead of just error.message
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data} = await api.updatePost(id, post)

    dispatch({ type: "UPDATE", payload: data})
  } catch (error) {
    console.log(error)
  }

}

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id)

    dispatch({type: "DELETE", payload: id})
  } catch (error) {
    console.log(error)
  }

}
