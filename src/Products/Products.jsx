import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BsFillBagHeartFill } from "react-icons/bs";

const Products = () => {
  return (
    <>
    <section className="card-container flex flex-wrap ml-8 lg:ml-80 mt-8 -z-2">
      <section className="card m-5 border-2 border-[#ededed] p-5 cursor-pointer rounded-xl">
        <img className='card-image w-52 mb-8' src="https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg" alt="shoe" />
        <div className="card-details border-t-2">
          <h3 className="card-title mb-4 pt-1.5">Shoe</h3>
          <section className="cad-review mb-4 flex items-center ">
            <AiFillStar className='text-amber-300' />
            <AiFillStar className='text-amber-300' />
            <AiFillStar className='text-amber-300' />
            <AiFillStar className='text-amber-300' />
            <span className="review text-lg ml-2.5"> 4</span>
          </section>
          <section className="card-price flex justify-around items-center">
            <div className="price">
            <del>$300</del> 200
            </div>
            <div className="bag">
              <BsFillBagHeartFill className='text-[#535353]' />
            </div>
          </section>
        </div>
      </section>
      <section className="card m-5 border-2 border-[#ededed] p-5 cursor-pointer rounded-xl">
        <img className='card-image w-52 mb-8' src="https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg" alt="shoe" />
         <div className="card-details border-t-2">
         <h3 className="card-title mb-4 pt-1.5">Shoe</h3>
          <section className="cad-review mb-4 flex items-center ">
            <AiFillStar className='text-amber-300' />
            <AiFillStar className='text-amber-300' />
            <AiFillStar className='text-amber-300' />
            <AiFillStar className='text-amber-300' />
            <span className="review text-lg ml-2.5"> 4</span>
          </section>
          <section className="card-price flex justify-around items-center">
            <div className="price">
            <del>$300</del> 200
            </div>
            <div className="bag">
              <BsFillBagHeartFill className='text-[#535353]' />
            </div>
          </section>
        </div>
      </section>
      <section className="card m-5 border-2 border-[#ededed] p-5 cursor-pointer rounded-xl">
        <img className='card-image w-52 mb-8' src="https://m.media-amazon.com/images/I/71VaQ+V6XnL._AC_UY695_.jpg" alt="shoe" />
         <div className="card-details border-t-2">
         <h3 className="card-title mb-4 pt-1.5">Shoe</h3>
          <section className="cad-review mb-4 flex items-center ">
            <AiFillStar className='text-amber-300' />
            <AiFillStar className='text-amber-300' />
            <AiFillStar className='text-amber-300' />
            <AiFillStar className='text-amber-300' />
            <span className="review text-lg ml-2.5"> 4</span>
          </section>
          <section className="card-price flex justify-around items-center">
            <div className="price">
            <del>$300</del> 200
            </div>
            <div className="bag">
              <BsFillBagHeartFill className='text-[#535353]' />
            </div>
          </section>
        </div>
      </section>
      <section className="card m-5 border-2 border-[#ededed] p-5 cursor-pointer rounded-xl">
        <img className='card-image w-52 mb-8' src="https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg" alt="shoe" />
         <div className="card-details border-t-2">
         <h3 className="card-title mb-4 pt-1.5">Shoe</h3>
          <section className="cad-review mb-4 flex items-center ">
            <AiFillStar className='text-amber-300' />
            <AiFillStar className='text-amber-300' />
            <AiFillStar className='text-amber-300' />
            <AiFillStar className='text-amber-300' />
            <span className="review text-lg ml-2.5"> 4</span>
          </section>
          <section className="card-price flex justify-around items-center">
            <div className="price">
            <del>$300</del> 200
            </div>
            <div className="bag">
              <BsFillBagHeartFill className='text-[#535353]' />
            </div>
          </section>
        </div>
      </section>
      <section className="card m-5 border-2 border-[#ededed] p-5 cursor-pointer rounded-xl">
        <img className='card-image w-52 mb-8' src="https://m.media-amazon.com/images/I/51+P9uAvb1L._AC_UY695_.jpg" alt="shoe" />
         <div className="card-details border-t-2">
         <h3 className="card-title mb-4 pt-1.5">Shoe</h3>
          <section className="cad-review mb-4 flex items-center ">
            <AiFillStar className='text-amber-300' />
            <AiFillStar className='text-amber-300' />
            <AiFillStar className='text-amber-300' />
            <AiFillStar className='text-amber-300' />
            <span className="review text-lg ml-2.5"> 4</span>
          </section>
          <section className="card-price flex justify-around items-center">
            <div className="price">
            <del>$300</del> 200
            </div>
            <div className="bag">
              <BsFillBagHeartFill className='text-[#535353]' />
            </div>
          </section>
        </div>
      </section>
    </section>
    </>
  )
}

export default Products