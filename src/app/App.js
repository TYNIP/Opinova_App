import React from 'react';
import '../assets/App.css';
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigation} from 'react-router-dom';
import AppLayout from './AppLayout';

function App() {
  /* ROUTES SETUP */
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<AppLayout/>}>
      
    </Route>
  ));
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
