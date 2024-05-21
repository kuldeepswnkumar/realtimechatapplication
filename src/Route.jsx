import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";


import Register from "./Components/Register.jsx";
import UserLogin from "./Components/UserLogin.jsx";
import ChatDashboard from './Components/ChatDashboard.jsx'
import UserProfile from "./Components/UserProfile.jsx";
import AiBot from "./Components/Sidebar/AiBot.jsx";
import Layout from "./Layout.jsx";
import DeleteUser from "./Components/Sidebar/DeleteUser.jsx";
import UserLogout from "./Components/UserLogout.jsx";


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
        path: "/register",
        element: <Register />
    },
    {
        path: '/deleteuser/:id',
        element: <DeleteUser />
    },
    {
        path: '/logout',
        element: <UserLogout />
    },
    {
        path: "/chatDashboard",
        element: <Layout />,
        children: [
            {
                path: '/chatDashboard',
                element: <ChatDashboard />
            },
            {
                path: '/chatDashboard/bot',
                element: <AiBot />
            },
            {
                path: '/chatDashboard/profile',
                element: <UserProfile />
            },

        ]
    }

]);

const Router = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default Router