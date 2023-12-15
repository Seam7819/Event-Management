
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/home/Home";
import Root from "../layouts/Root";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import Contact from "../Pages/Contact/Contact";
import LogIn from "../Pages/LogIn/LogIn";
import SignIn from "../Pages/SignIn/SignIn";
import Details from "../Pages/Services/Details";
import PrivateRoute from "./PrivateRoute";




const router = createBrowserRouter([
    {
        path : '/',
        element : <Root></Root>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
                loader : () => fetch('data.json')
            },
            {
                path : '/about',
                element : <About></About>
            },
            {
                path : '/services',
                element : <PrivateRoute><Services></Services></PrivateRoute>,
                loader : () => fetch('details.json')
            },
            {
                path : 'contact',
                element : <Contact></Contact>
            },
            {
                path : '/login',
                element : <LogIn></LogIn>
            },
            {
                path : '/signin',
                element : <SignIn></SignIn>
            },
            {
                path : '/details',
                element : <Details></Details>
            }
        ]
    }
])

export default router;