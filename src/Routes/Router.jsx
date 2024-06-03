import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import CardDetails from "../pages/CardDetails/CardDetails";
import Address from "../pages/Address/Address";
import Order from "../pages/Orderpages/Order";
import PrivateRouter from "./PrivateRoutes/PrivateRouter";
import About from "../pages/About/About";

const router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout></MainLayout>,
        children:([
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/products',
                element:<PrivateRouter><Products></Products></PrivateRouter>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signUp',
                element:<SignUp></SignUp>
            },
            {
                path:'/cardDetails/:id',
                element:<CardDetails></CardDetails>,
                loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            
            },
            {
                path:'/address',
                element:<Address></Address>
            },
            {
                path:'/order',
                element:<PrivateRouter><Order></Order></PrivateRouter>
            }
          
        ])
    }
])

export default router;