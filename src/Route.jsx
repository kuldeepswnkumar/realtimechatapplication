import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";


import Register from "./Components/Register.jsx";
import UserLogin from "./Components/UserLogin.jsx";
import ChatDashboard from "./Components/ChatDashboard.jsx";
import UserProfile from "./Components/Sidebar/UserProfile.jsx";
import Bot from "./Components/Sidebar/Bot.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <UserLogin />,
        children: [
            {
                path: "/login",
                element: <UserLogin />
            }
        ]
    },
    {
        path: "/login",
        element: <UserLogin />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/chatdashboard",
        element: <ChatDashboard />
    },
    {
        path: "/profile",
        element: <UserProfile />
    },
    {
        path: "/bot",
        element: <Bot />
    },


]);

const Router = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default Router