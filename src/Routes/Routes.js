import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../components/Pages/AboutUs/AboutUs";
import Home from "../components/Pages/Home/Home";
import Login from "../components/Pages/Login/Login";
import Products from "../components/Pages/Products/Products";
import Services from "../components/Pages/Services/Services";
import Signup from "../components/Pages/Signup/Signup";
import Main from "../Layout/Main";

export const routes= createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/products',
                element: <Products></Products>
            },
            {
                path: '/aboutus',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
        ]
    }
])