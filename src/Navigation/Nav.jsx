import { FiHeart } from "react-icons/fi"
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai"
import Logo from "../assets/sortify.png";


const Nav = ({query, handleInputChange, toggleSidebar}) => {
  return (
    <nav className="sticky top-0 bg-[#222020] text-white flex shadow-[0px_7px_6px_-4px_rgba(0,_0,_0,_0.8)] justify-around items-center h-24 z-50 ">
      {/* Fixed logo section */}
      <div
        className="h-24 flex justify-center items-center  cursor-pointer"
        onClick={toggleSidebar}
      >
        <img src={Logo} alt="Sortify Logo" className="max-w-[100px] object-contain" />
      </div>
      <div className="nav-container w-full  p-5 lg:w-[800px]">
        <input className=' py-3 px-5 border-0 bg-[#4b4848] outline-0 rounded-md relative w-full text-black'  onChange={handleInputChange}
          value={query} type="text"  placeholder='Search Products' />
      </div>
      <div className="profile-container hidden md:flex p-5">
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