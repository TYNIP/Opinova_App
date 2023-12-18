import React from 'react';
import '../assets/App.css';
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Outlet, Navigate} from 'react-router-dom';
import AppLayout from './AppLayout';
import PostComments from '../features/comments/PostComments';

function App() {
  /* ROUTES SETUP */
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<AppLayout/>}>
      <Route path='home' element={<Outlet />} />
      <Route path='posts' element={<Outlet />} />
      <Route path='posts/:postId/comments' element={<PostComments />} />
    </Route>
  ));
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
