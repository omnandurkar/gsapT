import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './view/Home';
import Page1 from './view/Page1';
import Page2 from './view/Page2';
import Page3 from './view/Page3';
import Page4 from './view/Page4';
import Page5 from './view/Page5';
import Page6 from './view/Page6';


function App() {

  const router = createBrowserRouter([
    {
      path : "/",
      element : <Home/>
    },

    {
      path : "/page1",
      element : <Page1/>
    },

    {
      path : "/page2",
      element : <Page2/>
    },

    {
      path : "/page3",
      element : <Page3/>
    },

    {
      path : "/page4",
      element : <Page4/>
    },

    {
      path : "/page5",
      element : <Page5/>
    },

    {
      path : "/page6",
      element : <Page6/>
    }

  ])
  

  return (
    <RouterProvider router={router}/>
  )
}

export default App
