import { Outlet } from "react-router";
import Navbar from "../Home/Navber";
import Footer from "./Footer";


export default function CommonLayout() {
  return (
    <div >
    
       <Navbar />

     <div className="relative top-15">
       <Outlet/>
     </div>

      <Footer />

    </div>
  );
}
