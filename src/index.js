import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// import {
//     createBrowserRouter,
//     RouterProvider,
//     Route,
//     Link,
//   } from "react-router-dom";  
import App from './App';
// import Team from './Team';
import './App.css';

// const router = createBrowserRouter([
//     {
//       path: "/",
//       element: (
//         <Link to="/">
//             <App />
//         </Link>),
//     },
//     {
//       path: "team",
//       element: (
//         <Link to="team">
//             <Team />
//         </Link>
//       ),
//     },
//   ]);
  
const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);