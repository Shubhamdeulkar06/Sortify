import React from "react";
import Input from "../../components/Input";

const Price = ({ handleChange }) => {
  return (
    <div className="ml-5">
      <h2 className="text-[22px] font-normal mb-5">Price</h2>

      <div className="mt-5">
        <label className="block relative pl-9 mb-3 cursor-pointer select-none">
          <input
            onChange={handleChange}
            type="radio"
            name="test2"
            className="peer absolute opacity-0 cursor-pointer"
          />
          <span className="absolute top-0 left-0 h-5 w-5 bg-[#eee] rounded-full after:content-[''] after:absolute after:hidden peer-checked:after:block after:top-[6.4px] after:left-[6.4px] after:w-[7px] after:h-[7px] after:rounded-full after:bg-white peer-hover:bg-[#ccc] peer-checked:bg-[#2196f3]"></span>
          All
        </label>
        <Input
          onChange={handleChange}
          value={50}
          name="test2"
          title="$0 - $50"
        />
        <Input
          onChange={handleChange}
          value={50}
          name="test2"
          title="$0 - $50"
        />
        <Input
          onChange={handleChange}
          value={100}
          name="test2"
          title="$50 - $100"
        />
        <Input
          onChange={handleChange}
          value={150}
          name="test2"
          title="$100 - $150"
        />
        <Input
          onChange={handleChange}
          value={200}
          name="test2"
          title="$150 +"
        />
      </div>
    </div>
  );
};

export default Price;
