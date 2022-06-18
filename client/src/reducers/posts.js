export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload]; // array of posts, add a new post stored in action.payload
        default:
            return posts;
    }
}