import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchPostComments, selectPostCommentsState } from './postCommentsSlice';

const PostComments = ({ goBack }) => {
  const dispatch = useDispatch();
  const { data: postWithComments, isLoading, error } = useSelector(selectPostCommentsState);
  const {postId} = useParams();

  useEffect(() => {
    dispatch(fetchPostComments(postId));
  }, [dispatch, postId]);

  const post = postWithComments.post;
  const comments = postWithComments.comments;

  return (
    <div className='cGeneralPosts'>
      <div className="post-item">
        <h3>{post.title}</h3>
        {post.body && <p>{post.body}</p>}
        {post.imageUrl && <img src={post.imageUrl} alt="Img went brrr 😔" />}
        <p>{post.time} by {post.user}</p>
        <p>{post.likes} likes</p>
      </div>
      <button onClick={goBack}>Go Back</button>
      <div id='postComments'>
      <h2>Post Comments</h2>
      {isLoading && (
        <section class="dots-container">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        </section>
      )}
      {error && <p>Error: {error}</p>}
      {!isLoading && !error && comments.length === 0 && <p>No comments found</p>}
      {!isLoading && !error && comments.length > 0 && (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <p>{comment.body}</p>
              <p>{comment.user} • {comment.time}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
    <button onClick={goBack}>Go Back</button>
    </div>
  );
};

export default PostComments;