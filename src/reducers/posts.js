export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      // returns all existing posts plus the new post from the payload
      return [ ...posts, action.payload];
    default:
      return posts;
  }
};
