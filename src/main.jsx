import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Legal from "./pages/Legal.jsx";


const router = createBrowserRouter([
{
path: "/",
element: <App />,
children: [
{ index: true, element: <Home /> },
{ path: "carte", element: <Menu /> },
{ path: "a-propos", element: <About /> },
{ path: "contact", element: <Contact /> },
{ path: "mentions-legales", element: <Legal /> },
],
},
]);


createRoot(document.getElementById("root")).render(
<React.StrictMode>
<RouterProvider router={router} />
</React.StrictMode>
);