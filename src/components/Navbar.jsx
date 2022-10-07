import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
function Navbar() {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4  text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React..</h1>
      <ul className='hidden  md:flex'>
        <li className='p-4 hover:text-[#00df9a] cursor-pointer'>Home</li>
        <li className='p-4 hover:text-[#00df9a] cursor-pointer'>Compan</li>
        <li className='p-4 hover:text-[#00df9a] cursor-pointer'>Resources</li>
        <li className='p-4 hover:text-[#00df9a] cursor-pointer'>About</li>
        <li className='p-4 hover:text-[#00df9a] cursor-pointer'>Contact</li>
      </ul>
      <div onClick={handleClick} className='block md:hidden'>
        {open ? <AiOutlineClose size={40} /> : <AiOutlineMenu size={40} />}

        <ul
          className={
            open
              ? 'fixed  left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] text-white ease-in-out duration-500 '
              : 'ease-in-out duration-500 fixed left-[-100%]'
          }
        >
          <li className='p-4 border-b border-gray-200 hover:bg-green-600 hover:opacity-70	 '>
            Home
          </li>
          <li className='p-4 border-b border-gray-200 hover:bg-green-600  hover:opacity-70	'>
            Company
          </li>
          <li className='p-4 border-b border-gray-200 hover:bg-green-600  hover:opacity-70	'>
            Resources
          </li>
          <li className='p-4 border-b border-gray-200 hover:bg-green-600  hover:opacity-70	'>
            About
          </li>
          <li className='p-4 border-b border-gray-200 hover:bg-green-600  hover:opacity-70	'>
            Contact
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
