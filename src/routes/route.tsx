import App from "@/App";
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
            }
        ]
    }
])
export default routes