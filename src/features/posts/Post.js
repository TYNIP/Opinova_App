import React from 'react';
import { Link } from 'react-router-dom';

export default function Post({post}){
    return (
        <div className="post-item">
          <h3>{post.title}</h3>
          {post.body && <p>{post.body}</p>}
          {post.imageUrl && <img src={post.imageUrl} alt="Img went brrr 😔" />}
          <p>{post.time} by {post.user}</p>
          <p>{post.comments} comments | {post.likes} likes</p>
          <Link to={`/posts/${post.id}/comments`}>View Comments</Link>
        </div>
      );
};