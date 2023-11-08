import { createBrowserRouter } from "react-router-dom";
import ForgotPassword from "../pages/ForgotPassword";
import Main from "../layout/main/Main";
import Dashboard from "../layout/dashboard/Dashboard";
import ProductList from "../pages/dashboard/ProductList";
import AddProduct from "../pages/dashboard/AddProduct";
import Home from "../pages/main/Home";
import Login from "../pages/main/Login";
import SignUp from "../pages/main/SignUp";
import AllProducts from "../pages/main/AllProducts";
import ReadingHistory from "../pages/main/ReadingHistory";
import BlogDetails from "../pages/main/BlogDetails";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signUp',
                element: <SignUp />
            },
            {
                path: 'allProducts',
                element: <AllProducts />
            },
            {
                path: 'readingHistory',
                element: <ReadingHistory />
            },
            {
                path: 'blog/:blogId',
                element: <BlogDetails />
            },
            {
                path: 'forgot-password',
                element: <ForgotPassword />
            },
        ],
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: '/dashboard',
                element: <ProductList />
            },
            {
                path: 'add-product',
                element: <AddProduct />
            },
        ],
    },

])

export default routes