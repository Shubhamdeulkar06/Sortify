import React from "react";

const Input = ({ handleChange, title, color, value, name }) => {
  return (
    <label className="block relative pl-9 mb-3 cursor-pointer select-none">
      <input
        type="radio"
        name={name}
        value={value}
        onChange={handleChange}
        className="peer absolute opacity-0 cursor-pointer"
      />
      <span
        style={{ backgroundColor: color }}
        className="absolute top-0 left-0 h-5 w-5 bg-[#eee] rounded-full after:content-[''] after:absolute after:hidden peer-checked:after:block after:top-[6.4px] after:left-[6.4px] after:w-[7px] after:h-[7px] after:rounded-full after:bg-white peer-hover:bg-[#ccc] peer-checked:bg-[#2196f3]"
      ></span>
      {title}
    </label>
  );
};

export default Input;
