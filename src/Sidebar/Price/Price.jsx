import React from "react";

const Price = () => {
  return (
    <div className="ml-5">
      <h2 className="text-[22px] font-normal mb-5">Price</h2>

      <div className="mt-5">
        {/* All */}
        <label className="block relative pl-9 mb-3 cursor-pointer select-none">
          <input
            type="radio"
            name="test2"
            className="peer absolute opacity-0 cursor-pointer"
          />
          <span className="absolute top-0 left-0 h-5 w-5 bg-gradient-to-b from-blue-500 to-red-500 rounded-full after:content-[''] after:absolute after:hidden peer-checked:after:block after:top-[6.4px] after:left-[6.4px] after:w-[7px] after:h-[7px] after:rounded-full after:bg-white peer-hover:bg-[#ccc] peer-checked:bg-[#2196f3]"></span>
          All
        </label>
        <label className="block relative pl-9 mb-3 cursor-pointer select-none">
          <input
            type="radio"
            name="test2"
            className="peer absolute opacity-0 cursor-pointer"
          />
          <span className="absolute top-0 left-0 h-5 w-5 bg-[#eee] rounded-full after:content-[''] after:absolute after:hidden peer-checked:after:block after:top-[6.4px] after:left-[6.4px] after:w-[7px] after:h-[7px] after:rounded-full after:bg-white peer-hover:bg-[#ccc] peer-checked:bg-[#2196f3]"></span>
          $0 - $50
        </label>
        <label className="block relative pl-9 mb-3 cursor-pointer select-none">
          <input
            type="radio"
            name="test2"
            className="peer absolute opacity-0 cursor-pointer"
          />
          <span className="absolute top-0 left-0 h-5 w-5 bg-[#eee] rounded-full after:content-[''] after:absolute after:hidden peer-checked:after:block after:top-[6.4px] after:left-[6.4px] after:w-[7px] after:h-[7px] after:rounded-full after:bg-white peer-hover:bg-[#ccc] peer-checked:bg-[#2196f3]"></span>
          $50 - $100
        </label>
        <label className="block relative pl-9 mb-3 cursor-pointer select-none">
          <input
            type="radio"
            name="test2"
            className="peer absolute opacity-0 cursor-pointer"
          />
          <span className="absolute top-0 left-0 h-5 w-5 bg-[#eee] rounded-full after:content-[''] after:absolute after:hidden peer-checked:after:block after:top-[6.4px] after:left-[6.4px] after:w-[7px] after:h-[7px] after:rounded-full after:bg-white peer-hover:bg-[#ccc] peer-checked:bg-[#2196f3]"></span>
          $100 - $150
        </label>
        <label className="block relative pl-9 mb-3 cursor-pointer select-none">
          <input
            type="radio"
            name="test2"
            className="peer absolute opacity-0 cursor-pointer"
          />
          <span className="absolute top-0 left-0 h-5 w-5 bg-[#eee] rounded-full after:content-[''] after:absolute after:hidden peer-checked:after:block after:top-[6.4px] after:left-[6.4px] after:w-[7px] after:h-[7px] after:rounded-full after:bg-white peer-hover:bg-[#ccc] peer-checked:bg-[#2196f3]"></span>
          $150 +
        </label>
      </div>
    </div>
  );
};

export default Price;
