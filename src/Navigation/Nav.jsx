import { FiHeart } from "react-icons/fi"
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai"

const Nav = ({query, handleInputChange}) => {
  return (
    <nav className="sticky top-0 bg-white flex shadow-[0px_7px_6px_-4px_rgba(0,_0,_0,_0.8)] justify-around items-center h-24 z-50 ml-8">
      <div className="nav-container ">
        <input className=' py-3 px-5 border-0 bg-[#f7f7f7] outline-0 rounded-md relative w-56'  onChange={handleInputChange}
          value={query} type="text"  placeholder='Search Products' />
      </div>
      <div className="profile-container flex">
        <a href="#">
          <FiHeart className="w-6 h-6 ml-8" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="w-6 h-6 ml-8" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="w-6 h-6 ml-8" />
        </a>
      </div>
    </nav>
  )
}

export default Nav