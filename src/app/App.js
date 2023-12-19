import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from 'react-router-dom';
import AppLayout from './AppLayout';
import PostComments from '../features/comments/PostComments';
import Post from '../features/posts/Posts';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<AppLayout />} >
      <Route index element={ <Navigate to="home" replace/> }/>
      <Route path='home' element={<Post/>} />
      <Route path='posts' element={<Post/>} />
      <Route path='posts/:postId/comments' element={<PostComments goBack={() => window.history.back()} />} />
    </Route>
  ));
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;
