import {Metadata} from "next";
import React from "react";
import {commentsService} from "@/services/api.service";

export const generateMetadata = async ({params}: { params: { id: string } }): Promise<Metadata> => {
    const commentsId = await commentsService.getCommentById(params.id)
    if (!commentsId) return {title: "Comment not found"}
    return {title: "Comment " + commentsId.id}
}
const Layout = ({children}: { children: React.ReactNode }) => {
    return (
        <div>
            {children}
        </div>
    )
}
export default Layout