import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";
const Card = ({ img, title,  reviews, newPrice,prevPrice }) => {
  return (
    <section className="card m-5 border-2 border-[#ededed] p-5 cursor-pointer rounded-xl">
      <img
        className="card-image w-52 h-28  mb-8"
        src={img}
        alt={title}
      />
      <div className="card-details border-t-2">
        <h3 className="card-title mb-4 pt-1.5">{title}</h3>
        <section className="cad-review mb-4 flex items-center ">
          <AiFillStar className="text-amber-300" />
          <AiFillStar className="text-amber-300" />
          <AiFillStar className="text-amber-300" />
          <AiFillStar className="text-amber-300" />
          <span className="review text-lg ml-2.5"> {reviews}</span>
        </section>
        <section className="card-price flex justify-around items-center">
          <div className="price">
            <del>{prevPrice}</del> ${newPrice}
          </div>
          <div className="bag">
            <BsFillBagHeartFill className="text-[#535353]" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Card;
