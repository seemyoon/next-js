const baseUrl = "https://jsonplaceholder.typicode.com"
const url = {
    users: {
        userBaseUrl: "/users",
        userBaseUrlById: (id: string | number) => baseUrl + url.users.userBaseUrl + "/" + id
    },
    posts: {
        postBaseUrl: "/posts",
        postBaseUrlById: (id: string | number) => baseUrl + url.posts.postBaseUrl + "/" + id,
    },
    comments :{
        commentsBaseUrl: "/comments",
        commentsUrlById: (id: string | number) => baseUrl + url.comments.commentsBaseUrl + "/" + id,
    }
}
export {baseUrl, url}