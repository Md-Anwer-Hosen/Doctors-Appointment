import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const activeClass = "pb-1 border-b-2 border-blue-600 text-blue-600";
  const normalClass =
    "pb-1 border-b-2 border-transparent text-gray-600 hover:text-blue-600";

  return (
    <div className="">
      <div className="navbar bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            {/* MOBILE MENU */}
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content text-black rounded-box z-1 mt-3 w-52 p-2 shadow bg-white"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? activeClass : normalClass
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/mybooking"
                  className={({ isActive }) =>
                    isActive ? activeClass : normalClass
                  }
                >
                  My-Bookings
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? activeClass : normalClass
                  }
                >
                  Blogs
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? activeClass : normalClass
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          <a className="btn btn-ghost text-xl ">
            <div className="flex items-center justify-between gap-2">
              <img className="h-7" src="/fi_16340199.png" alt="icon" />
              <h3>Phudu</h3>
            </div>
          </a>
        </div>

        {/* DESKTOP MENU */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeClass : normalClass
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/mybooking"
                className={({ isActive }) =>
                  isActive ? activeClass : normalClass
                }
              >
                My-Bookings
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? activeClass : normalClass
                }
              >
                Blogs
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? activeClass : normalClass
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end hidden sm:flex">
          <a className="btn bg-[#176AE5] hover:bg-[#144ca7] rounded-4xl text-white">
            Emergency
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
