import React from "react";

const Navbar = () => {
  return (
    <div className="px-10">
      <div className="navbar bg-base-100">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>

              <li>
                <a>My-Bookings</a>
              </li>

              <li>
                <a>Blogs</a>
              </li>

              <li>
                <a>Contact Us</a>
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
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>

            <li>
              <a>My-Bookings</a>
            </li>

            <li>
              <a>Blogs</a>
            </li>

            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-[#176AE5] hover:bg-[#144ca7] rounded-4xl text-white">
            Emergency
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
