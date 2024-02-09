import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Profile from "../pages/Profile/Profile/Profile";
import MyProfile from "../pages/Profile/MyProfile/MyProfile";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "login",
                element: <Login></Login>,
            },
            {
                path: "signup",
                element: <SignUp></SignUp>,
            },
        ],
    },
    {
        path: "profile",
        element: (
            <PrivetRoute>
                <Profile></Profile>
            </PrivetRoute>
        ),
        children: [{ path: "my-profile", element: <MyProfile></MyProfile> }],
    },
]);

export default router;
