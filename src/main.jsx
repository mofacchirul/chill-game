import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayOut from './MainLayOut/MainLayOut';
import Home from './Pages/Home/Home';

import {

  QueryClient,
  QueryClientProvider,
}  from '@tanstack/react-query'
import BlogDetels from './Pages/HomePage/Blog/BlogDetels/BlogDetels';
import Match from './Pages/Match/Match';
import Players from './Pages/Players/Players';
import Players_detels from './Pages/Players/Players_detels/Players_detels';
import Contack from './Pages/Contack/Contack';
import Blog from './Pages/Blog/Blog';
import Login from './Pages/Login/Login';
import SignupForm from './Pages/SingUp/Singup';
import AuthProvider from './Provider/AuthProvider/AuthProvider';


// Create a client
const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:'blog/:id',
        element:<BlogDetels>
        </BlogDetels>,
        loader:({params})=>fetch(`http://localhost:5000/blog/${params.id}`)
      },
      {
        path:'/match',
        element:<Match></Match>
      },
      {
        path:'/Player',
        element:<Players></Players>
      },
      {
        path:'/players_detels/:id',
        element:<Players_detels></Players_detels>,
        loader:({params})=>fetch(`http://localhost:5000/player/${params.id}`)
      },
      {
     path:'blog',
     element:<Blog></Blog>
      },
      {
        path:'contack',
        element:<Contack></Contack>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'signup',
        element:<SignupForm></SignupForm>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
<StrictMode>
<QueryClientProvider  client={queryClient}>
<AuthProvider>
<div
    style={{
      background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 100%, rgba(0,212,255,1) 100%)",
      backgroundSize: "cover",
      color: "white",
      minHeight: "100vh", 
    }}
  >
    <RouterProvider router={router} />
  </div>
</AuthProvider>
</QueryClientProvider>

 
</StrictMode>
)
