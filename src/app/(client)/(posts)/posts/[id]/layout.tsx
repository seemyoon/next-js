import {Metadata} from "next";
import React from "react";
import {postService} from "@/services/api.service";

export const generateMetadata = async ({params}: { params: { id: string } }): Promise<Metadata> => {
    const postId = await postService.getPostById(params.id)
    if (!postId) return {title: "Posts not found"};
    return {title: "Post: " + postId.id}
}

const Layout = ({children}: { children: React.ReactNode }) => {
    return (
        <div>
            {children}
        </div>
    )
}
export default Layout