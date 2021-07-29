export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      // returns all existing posts plus the new post from the payload
      return [ ...posts, action.payload];
    case "UPDATE":
      return posts.map((post) => post._id === action.payload._id ? action.payload : post)
    default:
      return posts;
  }
};
