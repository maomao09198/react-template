import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {

  const links = (
    <>
      <li>
        <Link to="/" >Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );

    return (
      <div>
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="navbar bg-transparent w-full">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-6 w-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              
              <div className="hidden flex-none lg:block">
                <ul className="menu menu-horizontal">
                  {/* Navbar menu content here */}
                  {links}
                  
                </ul>
              </div>
            </div>
            {/* Page content here */}
            
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-transparent min-h-full w-80 p-4">
              {/* Sidebar content here */}
              {links}
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Navbar;