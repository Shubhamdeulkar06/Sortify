import React from 'react'
import Button from '../components/Button'

const Recommended = ({handleClick}) => {
  return (
    <div>
      <h2 className='ml-8 lg:ml-80 my-5 text-xl '>Recommended</h2>
      <div className="recommended-btns ml-8 lg:ml-80 flex flex-wrap">
        <Button onClickHandler={handleClick} title="All Products" value=""/>
        <Button onClickHandler={handleClick} title="Nike" value="Nike"/>
        <Button onClickHandler={handleClick} title="Puma" value="Puma"/>
        <Button onClickHandler={handleClick} title="Vans" value="Vans"/>
        <Button onClickHandler={handleClick} title="Adidas" value="Adidas"/>
      </div>  
    </div>
  )
}

export default Recommended