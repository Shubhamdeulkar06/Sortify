import React from "react";
import Input from "../../components/Input";

const Colors = ({ handleChange }) => {
  return (
    <div className="ml-5">
      <h2 className="text-[22px] font-normal mb-5">Colors</h2>

      <div className="mt-5">
        <label className="block relative pl-9 mb-3 cursor-pointer select-none">
          <input
            onChange={handleChange}
            type="radio"
            name="test3"
            value=""
            className="peer absolute opacity-0 cursor-pointer"
          />
          <span className="absolute top-0 left-0 h-5 w-5 bg-gradient-to-b from-blue-500 to-red-500 rounded-full after:content-[''] after:absolute after:hidden peer-checked:after:block after:top-[6.4px] after:left-[6.4px] after:w-[7px] after:h-[7px] after:rounded-full after:bg-white peer-hover:bg-[#ccc] peer-checked:bg-[#2196f3]"></span>
          All
        </label>
        <Input
          onChange={handleChange}
          value="black"
          color="black"
          name="test3"
          title="Black"
        />
        <Input
          onChange={handleChange}
          value="green"
          color="green"
          name="test3"
          title="Green"
        />
        <Input
          onChange={handleChange}
          value="blue"
          color="blue"
          name="test3"
          title="Blue"
        />
        <Input
          onChange={handleChange}
          value="red"
          color="red"
          name="test3"
          title="Red"
        />
        <label className="block relative pl-9 mb-3 cursor-pointer select-none">
          <input
            onChange={handleChange}
            type="radio"
            name="test3"
            value="white"
            className="peer absolute opacity-0 cursor-pointer"
          />
          <span className="absolute top-0 left-0 h-5 w-5 bg-[#fff] border border-black rounded-full after:content-[''] after:absolute after:hidden peer-checked:after:block after:top-[6.4px] after:left-[6.4px] after:w-[7px] after:h-[7px] after:rounded-full after:bg-white peer-hover:bg-[#ccc] peer-checked:bg-[#2196f3]"></span>
          White
        </label>
      </div>
    </div>
  );
};

export default Colors;
