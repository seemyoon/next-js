import React from 'react';
import {commentsService} from "@/services/api.service";

const CommentsPageById = async ({params}: { params: { id: string } }) => {
    const commentById = await commentsService.getCommentById(params.id)
    if (!commentById) return null
    return (
        <div>
            Body: {commentById.body} <br/>
            Id: {commentById.id} <br/>
            Name: {commentById.name} <br/>
            Email: {commentById.email} <br/>
            PostId: {commentById.postId} <br/>
        </div>
    );
};

export default CommentsPageById;