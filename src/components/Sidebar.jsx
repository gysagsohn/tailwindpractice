import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/Logo_imageonly.png'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden lg:flex flex-col items-center fixed top-0 left-0 h-full bg-gray-900 text-white px-4 py-8 w-[12%]">
        <img src={logo} alt="App Logo" className="w-16 h-16 mb-6" />
        <div className="flex flex-col items-center space-y-6 mt-4 w-full">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-400' : ''}>Dashboard</NavLink>
          <NavLink to="/profile" className={({ isActive }) => isActive ? 'text-blue-400' : ''}>Profile</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-blue-400' : ''}>Contact</NavLink>
        </div>
      </nav>

      {/* Tablet Navbar (top horizontal for screens < 1020px and ≥ 800px) */}
      <nav className="hidden md:flex lg:hidden fixed top-0 left-0 right-0 bg-gray-900 text-white px-6 py-4 justify-between items-center z-50">
        <img src={logo} alt="Logo" className="w-10 h-10" />
        <div className="flex gap-6">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-400' : ''}>Dashboard</NavLink>
          <NavLink to="/profile" className={({ isActive }) => isActive ? 'text-blue-400' : ''}>Profile</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-blue-400' : ''}>Contact</NavLink>
        </div>
      </nav>

      {/* Mobile Hamburger Bar */}
      <div className="md:hidden flex justify-between items-center bg-gray-900 text-white p-4 fixed top-0 left-0 right-0 z-50">
        <img src={logo} alt="Logo" className="w-10 h-10" />
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl font-bold">
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-gray-800 text-white py-4 flex flex-col items-center space-y-4 z-40">
          <NavLink to="/" onClick={() => setIsOpen(false)} className="hover:text-blue-400">Dashboard</NavLink>
          <NavLink to="/profile" onClick={() => setIsOpen(false)} className="hover:text-blue-400">Profile</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)} className="hover:text-blue-400">Contact</NavLink>
        </div>
      )}
    </>
  )
}
