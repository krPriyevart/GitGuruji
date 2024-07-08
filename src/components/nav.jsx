import gitlogo from '../assets/gitlogo.png'
import React from 'react'
import { Menu, X } from 'lucide-react'
import { Outlet, Link } from "react-router-dom";
const menuItems = [
  {
    name: 'Home',
    to:'/',
  },
  {
    name: 'About',
    to:'about',
  },
  {
    name: 'Contact',
    to:'contact',
  },
]
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="relative w-full bg-slate-500">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span>
            <Link to="/contact" >
           <img src={gitlogo}   className="inline-block h-10 w-10 rounded-full"/>
           </Link>
          </span>
          <span className="font-bold  text-gray-50">GittoDoc</span>
        </div>
        <div className="hidden grow items-start lg:flex">
          <ul className="ml-12 inline-flex space-x-8">
            {menuItems.map((item,index) => (
              <li key={item.name}>
                <Link
                  to={item.to} key={index}
                  className="text-sm font-semibold text-gray-50 hover:text-gray-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <button
            type="button"
            className="rounded-md bg-slate-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Lets Start
          </button>
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-slate-500 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5 bg-slate-500">
                <div className="flex items-center justify-between ">
                  <div className="inline-flex items-center space-x-2">
                    <span>
                    <img src={gitlogo}   className="inline-block h-10 w-10 rounded-full"/>
                    </span>
                    <span className="font-bold text-gray-50">GittoDoc</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-300"
                      >
                        <span className="ml-3 text-base font-medium text-gray-50 ">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
                <button
                  type="button"
                  className="mt-4 w-full rounded-md bg-slate-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Lets Start
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default Nav