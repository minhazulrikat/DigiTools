import { FiShoppingCart } from "react-icons/fi";

const Navbar = ({ totalCartItem, handleCartClick }) => {
  return (
    <nav className="bg-base-100 shadow-sm">
      <div className="container max-w-300 mx-auto navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
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
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Products </a>
              </li>
              <li>
                <a>Features</a>
                <ul className="p-2">
                  <li>
                    <a>Feature 1</a>
                  </li>
                  <li>
                    <a>Feature 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Blogs</a>
              </li>
            </ul>
          </div>
          {/* "gradient primary" is a custom css class added into index.css*/}
          <a className=" text-xl sm:text-2xl font-extrabold gradient-primary text-transparent bg-clip-text ">
            DigiTools
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Products</a>
            </li>
            <li>
              <details>
                <summary>Features</summary>
                <ul className="p-2 bg-base-100 w-40 z-1">
                  <li>
                    <a>Feature 1</a>
                  </li>
                  <li>
                    <a>Feature 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Blogs</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <div onClick={handleCartClick} className="relative cursor-pointer">
            <FiShoppingCart />{" "}
            <span className="absolute -top-4 -right-2 text-secondary font-extrabold">
              {totalCartItem}
            </span>
          </div>
          <a className="font-semibold sm:tex-base text-sm">Login</a>
          <a className="btn gradient-primary font-semibold text-white rounded-full">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
