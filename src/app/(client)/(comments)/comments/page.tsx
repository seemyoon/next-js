import React from 'react';
import {commentsService, postService} from "@/services/api.service";
import Link from "next/link";

const CommentsPage = async () => {
    const comments = await commentsService.getAllComments()
    return (
        <div>
            {comments.map(comment => (<div key={comment.id}>
                <Link href={"/comments/" + comment.id}>{comment.id}. {comment.body}</Link></div>))}
        </div>
    );
};

export default CommentsPage;