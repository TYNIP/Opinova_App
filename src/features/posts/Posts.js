import React from 'react';
import {useSelector} from 'react-redux';
import {selectPostsState } from './postsSlice';
import Post from './Post';

export default function Posts(){
  const {data: posts, isLoading, error} = useSelector(selectPostsState);
    return (
      <div>
        <div id='status'>
          {isLoading && (
            <section class="dots-container">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </section>
            )}
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