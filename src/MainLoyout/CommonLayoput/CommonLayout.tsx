import { Outlet } from "react-router";
import Navbar from "../Home/Navber";

export default function CommonLayout() {
  return (
    <div>
      <Navbar />
      <Outlet/>
      
    </div>
  );
}
