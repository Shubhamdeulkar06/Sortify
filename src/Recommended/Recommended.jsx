import React from 'react'

const Recommended = () => {
  return (
    <div>
      <h2 className='ml-8 lg:ml-80 my-5 text-xl '>Recommended</h2>
      <div className="recommended-btns ml-8 lg:ml-80 flex flex-wrap">
        <button className='border-1 py-2.5 px-5 mb-2  mr-1.5 border-[#ccc] bg-transparent rounded-sm text-[#232323] cursor-pointer'>All Products</button>
        <button  className='border-1 py-2.5 px-5 mb-2  mr-1.5 border-[#ccc] bg-transparent rounded-sm text-[#232323] cursor-pointer'>Nike</button>
        <button  className='border-1 py-2.5 px-5 mb-2  mr-1.5 border-[#ccc] bg-transparent rounded-sm text-[#232323] cursor-pointer'>Adidas</button>
        <button  className='border-1 py-2.5 px-5 mb-2  mr-1.5 border-[#ccc] bg-transparent rounded-sm text-[#232323] cursor-pointer'>Puma</button>
        <button  className='border-1 py-2.5 px-5 mb-2  mr-1.5 border-[#ccc] bg-transparent rounded-sm text-[#232323] cursor-pointer'>Vans</button>
        </div>  
    </div>
  )
}

export default Recommended