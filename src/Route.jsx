import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";


import Register from "./Components/Register.jsx";
import UserLogin from "./Components/UserLogin.jsx";

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


]);

const Router = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default Router