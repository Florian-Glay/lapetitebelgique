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
import AdminLogin from "./pages/AdminLogin.jsx";
import Admin from "./pages/Admin.jsx";


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
{ path: "admin-login", element: <AdminLogin /> },
{ path: "admin", element: <Admin /> },
],
},
]);


createRoot(document.getElementById("root")).render(
<React.StrictMode>
<RouterProvider router={router} />
</React.StrictMode>
);