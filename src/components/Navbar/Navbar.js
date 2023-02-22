import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="flex justify-between py-3 px-10">
      <section className="flex">
        <Link to="/">
          <div className="">
            <p>
              <span className="oye font-bold text-xl">Health</span>
              <span className="font-bold text-xl">Solution</span>
            </p>
            <p className="book-service text-color">BOOK YOUR SERVICE</p>
          </div>
        </Link>
      </section>
      <section className="pt-1">
        <Link className="text-sm font-semibold pl-6 text-color" to="/services">
          Services
        </Link>
        <Link className="text-sm font-semibold pl-6 text-color" to="/products">
          Products
        </Link>
        <Link className="text-sm font-semibold pl-6 text-color" to="/aboutus">
          About Us
        </Link>
      </section>

      <section>
        <Link to="/login" className="btn btn-sm btn-outline mx-3 border-blue-400 text-blue-300 hover:bg-blue-300 hover:text-white hover:border-blue-300">Login</Link>
        <Link to="/Signup" className="btn btn-sm btn-outline border-blue-400 text-blue-300 hover:bg-blue-300 hover:text-white hover:border-blue-300">Signup</Link>
      </section>
    </div>
  );
};

export default Navbar;
