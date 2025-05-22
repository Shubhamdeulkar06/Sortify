import React from 'react'

const Button = ({onClickHandler, value, title}) => {
  return (
    <button onClick={onClickHandler} value={value} className='border-1 py-2.5 px-5 mb-2  mr-1.5 border-[#ccc] bg-transparent rounded-sm text-[#232323] cursor-pointer'>{title}</button>
  )
}

export default Button