import React from "react";
import Logo from "../assets/sortify.png";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

const Sidebar = () => {
  return (
    <aside className="w-[15%] h-screen fixed left-0 top-0 border-r border-[#e5e5e5] z-30 bg-white flex flex-col">
      
      {/* Fixed logo section */}
      <div className="w-full  py-6 flex justify-center border-b border-[#e5e5e5]">
        <img src={Logo} alt="Sortify Logo" className="max-w-25 object-contain" />
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto scrollbar-hide px-4 pt-4">
        <Category />
        <hr className="my-4 w-[160px] border-[#beb8b8]" />
        <Price />
        <hr className="my-4 w-[160px] border-[#beb8b8]" />
        <Colors />
        <hr className="my-4 w-[160px] border-[#beb8b8]" />
      </div>
      
    </aside>
  );
};

export default Sidebar;
