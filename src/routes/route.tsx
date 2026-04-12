import App from "@/App";
import AdmissionForm from "@/MainLoyout/AdmissionForm";
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
            },
            {
                Component:AdmissionForm,
                path:"/admissionform"
            }
        ]
    }
])
export default routes