import React from "react";
import Input from "../../components/Input";

const Category = ({ handleChange }) => {
  return (
    <div className="ml-5">
      <h2 className="text-[22px] font-normal mb-5">Category</h2>

      <div className="mt-5">
        <label className="block relative pl-9 mb-3 cursor-pointer select-none">
          <input
            handleChange={handleChange}
            type="radio"
            name="test"
            value=""
            className="peer absolute opacity-0 cursor-pointer"
          />
          <span className="absolute top-0 left-0 h-5 w-5 bg-[#eee] rounded-full after:content-[''] after:absolute after:hidden peer-checked:after:block after:top-[6.4px] after:left-[6.4px] after:w-[7px] after:h-[7px] after:rounded-full after:bg-white peer-hover:bg-[#ccc] peer-checked:bg-[#2196f3]"></span>
          All
        </label>
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
      </div>
    </div>
  );
};

export default Category;
