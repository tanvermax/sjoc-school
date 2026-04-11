import { Outlet } from "react-router";
import Navbar from "../Home/Navber";
import Footer from "./Footer";

export default function CommonLayout() {
  return (
    <div >
     <div className="bg-[#6543E0]">
       <Navbar />
     </div>
      <Outlet/>
      {/* <Footer/> */}
    </div>
  );
}
