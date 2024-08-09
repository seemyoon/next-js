interface IComment {
    postId: number
    id: number
    name: string
    email: string
    body: string
}
interface IPost {
    userId: number
    id: number
    title: string
    body: string
}
interface IUser {
    id: number
    name: string
    username: string
    email: string
}
