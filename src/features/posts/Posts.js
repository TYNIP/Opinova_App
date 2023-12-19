import React from 'react';
import {useSelector} from 'react-redux';
import {selectPostsState } from './postsSlice';
import Post from './Post';

export default function Posts(){
  const {data: posts, isLoading, error} = useSelector(selectPostsState);
  console.log("Data render posts", posts)
    return (
      <div>
        <div id='status'>
          {isLoading && <p>Loading...</p>}
          {error && <p className='noResult'> Ups... something wrong has happened <br/> Error: {error}</p>}
          {!isLoading && !error && posts.length === 0 && (
          <p className='noResult' > No Results Found <br/> 😔 <br/> Let's Search Another Thing <br/>😃</p>
          )}
        </div>
        {posts.map((post) => (
        <Post key={post.id} post={post} />
        ))}
        </div>
      );
};