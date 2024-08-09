import {baseUrl, url} from "@/constants/urls";

const userService = {
    getAllUsers: async (): Promise<IUser[]> => {
        return await fetch(baseUrl + url.users.userBaseUrl).then(value => value.json())
    },
    getUserById: async (id: string): Promise<IUser | null> => {
        return await fetch(url.users.userBaseUrlById(id)).then(value => value.json())
    }
}
const postService = {
    getAllPosts: async (): Promise<IPost[]> => {
        return await fetch(baseUrl + url.posts.postBaseUrl).then(value => value.json())
    },
    getPostById: async (id: string): Promise<IPost | null> => {
        return await fetch(url.posts.postBaseUrlById(id)).then(value => value.json())
    }
}
const commentsService = {
    getAllComments: async (): Promise<IComment[]> => {
        return await fetch(baseUrl + url.posts.postBaseUrl).then(value => value.json())
    },
    getCommentById: async (id: string): Promise<IComment | null> => {
        return await fetch(url.comments.commentsUrlById(id)).then(value => value.json())
    }
}
export {userService, postService,commentsService}
