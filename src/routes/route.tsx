import App from "@/App";
import ContactUs from "@/MainLoyout/ContactUs";
import Home from "@/MainLoyout/Home/Home";
import { createBrowserRouter } from "react-router";

const routes = createBrowserRouter([
    {
        Component:App,
        path:"/",
        children:[
            {
                Component:Home,
                path:"/"
            },
            {
                Component:ContactUs,
                path:"/contact"
            }
        ]
    }
])
export default routes