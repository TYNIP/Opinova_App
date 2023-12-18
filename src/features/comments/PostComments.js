// PostComments.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostComments, selectPostCommentsState } from './postCommentsSlice';

const PostComments = ({ postId, goBack }) => {
  const dispatch = useDispatch();
  const { data: comments, isLoading, error } = useSelector(selectPostCommentsState);

  useEffect(() => {
    dispatch(fetchPostComments(postId));
  }, [dispatch, postId]);

  return (
    <div>
      <button onClick={goBack}>Go Back</button>
      <h2>Post Comments</h2>
      {isLoading && <p>Loading comments...</p>}
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
  );
};

export default PostComments;