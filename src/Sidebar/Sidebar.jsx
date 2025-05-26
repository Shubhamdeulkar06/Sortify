import React from "react";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

const Sidebar = ({handleChange, isOpen}) => {
  return (
    <aside className={`fixed top-0 left-0 mt-24 h-screen w-[70%] lg:w-[15%] z-40 bg-[#1d1c1c] text-white border-r border-gray-200 shadow-md transform transition-transform duration-300 ease-in-out 
      ${isOpen ? "translate-x-0" : "-translate-x-full"} 
      lg:translate-x-0 lg:flex lg:flex-col`}>
      
     

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto scrollbar-hide px-4 pt-4">
        <Category handleChange={handleChange} />
        <hr className="my-4 w-[160px] border-[#beb8b8]" />
        <Price handleChange={handleChange} />
        <hr className="my-4 w-[160px] border-[#beb8b8]" />
        <Colors handleChange={handleChange} />
        <hr className="my-4 w-[160px] border-[#beb8b8]" />
      </div>
    </aside>
  );
};

export default Sidebar;
