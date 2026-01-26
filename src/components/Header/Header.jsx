// import PropTypes from 'prop-types'

import { NavLink } from "react-router-dom";

function Header() {
  const links = () => {
    return (
      <>
        <li>
          {" "}
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/listed-books">Listed Books</NavLink>
        </li>

        <li>
          <NavLink to="/pages-to-read">Pages To Read</NavLink>
        </li>
      </>
    );
  };
  return (
    <div>
      <div className="shadow-sm navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
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
              className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52"
            >
              {links()}
            </ul>
          </div>
          <a className="text-xl btn btn-ghost">Book Vibe</a>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">{links()}</ul>
        </div>
        <div className="flex flex-row gap-4 navbar-end">
          <a className="btn">Sign In</a>
          <a className="btn">Sign Up</a>
        </div>
      </div>
    </div>
  );
}

// Header.propTypes = {}

export default Header;
