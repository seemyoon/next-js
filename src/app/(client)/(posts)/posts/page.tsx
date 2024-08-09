import React from 'react';
import Link from "next/link";
import {postService} from "@/services/api.service";

const PostsPage = async () => {
    const allPosts = await postService.getAllPosts()

    return (
        <div>
            {allPosts.map(post => (<div key={post.id}>
                <Link href={"/posts/" + post.id}>{post.id}.{post.title}</Link></div>))}
        </div>
    );
};

export default PostsPage;