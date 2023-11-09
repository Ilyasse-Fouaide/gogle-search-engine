import React from 'react'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Navbar from './Navbar';
import Search from './Search';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Navigate to={"search"} />
      },
      {
        path: 'search',
        element: <Search />
      },
      {
        path: 'images',
        element: <Search />
      },
      {
        path: 'news',
        element: <Search />
      },
      {
        path: 'videos',
        element: <Search />
      },
    ],
  },
]);

const Routes = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Routes