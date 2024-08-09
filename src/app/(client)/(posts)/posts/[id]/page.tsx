import React from 'react';
import {postService} from "@/services/api.service";

const PostPageById = async ({params}: { params: { id: string } }) => {
    const post = await postService.getPostById(params.id)
    if (!post) return null
    return (
        <div>
            id :{post.id} <br/>
            userId :{post.userId} <br/>
            body :{post.body} <br/>
            title :{post.title} <br/>
        </div>
    )
}

export default PostPageById