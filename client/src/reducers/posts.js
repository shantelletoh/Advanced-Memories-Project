export default (posts = [], action) => {
    switch (action.type) {
        case 'DELETE':
            return posts.filter((post) => post._id !== action.payload); // return all posts but filter the deleted post
        case 'UPDATE':
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload]; // array of posts, add a new post stored in action.payload
        default:
            return posts;
    }
}