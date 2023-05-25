import sendRequest from './send-request.js';
const BASE_URL = '/api/posts';

export function getAllPosts() {
    return sendRequest(`${BASE_URL}`)
}
export async function createPost(post) {
    return sendRequest(`${BASE_URL}/create`, 'POST', post);
}

// export function getAllForUser() {
//     return sendRequest(`${BASE_URL}/user`);
// }

// export function getPost(postId) {
//     return sendRequest(`${BASE_URL}/${postId}`);
// }

// export async function deletePost(postId) {
//     return sendRequest(`${BASE_URL}/${postId}`, 'DELETE');
// }

