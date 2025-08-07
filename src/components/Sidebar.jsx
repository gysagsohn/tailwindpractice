import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/Logo_imageonly.png'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden lg:flex flex-col items-center fixed top-0 left-0 h-full bg-default px-4 py-8 w-[12%] shadow">
        <img src={logo} alt="App Logo" className="w-16 h-16 mb-6" />
        <div className="flex flex-col items-center space-y-6 mt-4 w-full text-sm font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-link' : 'hover:text-cta-hover'
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? 'text-link' : 'hover:text-success'
            }
          >
            Profile
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'text-link' : 'hover:text-border-muted'
            }
          >
            Contact
          </NavLink>
        </div>
      </nav>

      {/* Tablet Navbar (top horizontal) */}
      <nav className="hidden md:flex lg:hidden fixed top-0 left-0 right-0 bg-default text-primary px-6 py-4 justify-between items-center z-50 shadow">
        <img src={logo} alt="Logo" className="w-10 h-10" />
        <div className="flex gap-6 font-semibold text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-link' : 'hover:text-cta-hover'
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? 'text-warning' : 'hover:text-success'
            }
          >
            Profile
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'text-warning' : 'hover:text-success'
            }
          >
            Contact
          </NavLink>
        </div>
      </nav>

      {/* Mobile Hamburger Bar */}
      <div className="md:hidden flex justify-between items-center  bg-default text-primary p-4 fixed top-0 left-0 right-0 z-50 shadow">
        <img src={logo} alt="Logo" className="w-10 h-10" />
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl font-bold">
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0  bg-default text-primary py-4 flex flex-col items-center space-y-4 z-40 shadow">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-link"
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/profile"
            onClick={() => setIsOpen(false)}
            className="hover:text-link"
          >
            Profile
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-link"
          >
            Contact
          </NavLink>
        </div>
      )}
    </>
  )
}
