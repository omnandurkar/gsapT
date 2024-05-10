import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './view/Home';
import Page1 from './view/Page1';


function App() {

  const router = createBrowserRouter([
    {
      path : "/",
      element : <Home/>
    },

    {
      path : "/page1",
      element : <Page1/>
    }

  ])
  

  return (
    <RouterProvider router={router}/>
  )
}

export default App
