import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { user } = useSelector((state) => state.auth);

  //handleLogout
  const logOut = () => {
    localStorage.clear();
    navigate("/login");
    // alert("Logout successfully");
    toast.success("Logged out successfully");
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">RaktSeva</div>
        <ul className="links">
          {location.pathname === "/" ? (
            <a href="/analytics" className="home">
              Analytics
            </a>
          ) : (
            <a href="/" className="home">
              Home
            </a>
          )}

          <Link
            to="about-us-section"
            smooth={true}
            duration={800}
            className="home"
          >
            About Us
          </Link>
          <li>
            <p className="user">
              <FaRegUserCircle />
              {user?.name ||
                user?.hospitalName ||
                user?.organisationName ||
                user?.admin}
              &nbsp;
              <span className="badge text-bg-danger">{user?.role}</span>
            </p>
          </li>
          <li>
            <button className="homebtn" onClick={logOut}>
              Log Out
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
