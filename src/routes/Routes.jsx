import { createBrowserRouter } from "react-router";

import Root from "../layout/Root";
import Errorpage from "../pages/Errorpage";
import Homepage from "../pages/Homepage";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Blogs from "../pages/Blogs";
import SingleBlog from "../pages/SingleBlog";
import Faq from "../Faq";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: "/",
                element: <Homepage></Homepage>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "/blogs/:title",
                element: <SingleBlog></SingleBlog>
            },
            {
                path: "/faq",
                element: <Faq></Faq>
            }
        ]
    }
])

export default Routes;