import { FiHeart } from "react-icons/fi"
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai"
import Logo from '../assets/sortify.png'

const Nav = () => {
  return (
    <nav className="flex border-b-2 border-b-pink-900 justify-around items-center p-5 z-50 ml-8">
      <div className="nav-logo w-25"><img src={Logo} alt="logo" /></div>
      <div className="nav-container ">
        <input className=' py-3 px-5 border-0 bg-[#f7f7f7] outline-0 rounded-md relative w-56' type="text" name="" id=""  placeholder='Search Products' />
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