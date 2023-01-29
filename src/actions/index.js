import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = async () => {
    // BAD APPROACH s!!!
    const response = await jsonPlaceholder.get('/post');

    return {
        type: 'FETCH_POSTS',
        payload: response,
    };
};
