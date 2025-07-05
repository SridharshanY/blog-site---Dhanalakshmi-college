import { Link } from "react-router";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="flex gap-4 items-center bg-black text-white text-xl px-6 py-2">
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          width="125px"
          className="hover:scale-105 transition"
        />
      </Link>
      <ul className="flex gap-4">
        <li className="hover:scale-105 transition">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:scale-105 transition">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:scale-105 transition">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="hover:scale-105 transition">
          <Link to="/register">Register</Link>
        </li>
        <li className="hover:scale-105 transition">
          <Link to="/login">login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
