import { CiSearch } from "react-icons/ci";
import { GrCart } from "react-icons/gr";
import { GiSplitCross } from "react-icons/gi";
import Avatar from "react-avatar";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import NavbarSearch from "../NAVBAR-SEARCH/NavbarSearch";
import useAuthCalls from "../../SERVICES/useAuthCalls";
import { useSelector } from "react-redux";
import "./Navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [avatarLog, setAvatarLog] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const { logout, login } = useAuthCalls();
  const { categories } = useSelector((state) => state.blog);

  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = (e) => {
    setOpen(false);
    console.log("closing the modal");
  };

  const handleSearchModal = () => {
    setSearch(!search);
  };

  const handleCloseSearchModal = (e) => {
    if (search && !e.target.closest(".search-modal-active")) {
      setSearch(false);
    }
  };

  const logInfo = () => {
    setAvatarLog(!avatarLog);
  };

  return (
    <nav className={`header-container ${open ? "modal-active" : ""}`}>
      <div className="container">
        <div onClick={handleOpen}>
          <RxHamburgerMenu />
        </div>
        {open && (
          <div className="modal">
            <div className="close" onClick={handleClose}>
              <GiSplitCross />
            </div>

            <div className="modal-container">
              <h2>PYSCRIPT</h2>
              <ul>
                <Link to="/">
                  <li>HOME</li>
                </Link>
                <Link to="/about">
                  <li>ABOUT</li>
                </Link>
                <Link to="/blog">
                  <li>BLOG</li>
                </Link>
                <Link to="/contact">
                  <li>CONTACT</li>
                </Link>
              </ul>
            </div>
          </div>
        )}

        <div className="logo">PYSCRIPT-BLOGGER</div>
        <div className="nav-icons">
          <CiSearch onClick={handleSearchModal} />
          {search && (
            <NavbarSearch
              className="search-modal-active"
              onClick={handleCloseSearchModal}
            />
          )}

          <div className="divider"></div>

          <Link to={user ? "/cart-page" : "/"}>
            <div className="cart">
              <GrCart />
            </div>
          </Link>

          <div className="avatar-container" onClick={logInfo}>
            <Avatar
              size="50"
              src={
                user.username
                  ? user.image
                  : "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
              }
              round=".8rem"
            />
            <ul
              className="avatar-dropdown"
              style={{ display: avatarLog ? "block" : "none" }}
            >
              <Link to={user ? "my-profile" : "/"}>
                <li>My Profile</li>
              </Link>
              <Link to={!user && "/login"}>
                <li onClick={() => (user ? logout() : login())}>
                  {user ? "Log out" : " Log in"}
                </li>
              </Link>
              {!user.username && (
                <Link to="/register">
                  <li>Register</li>
                </Link>
              )}

              <Link>
                <li></li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      <ul className="main-ul">
        <Link to="/">
          <li>HOME</li>
        </Link>

        {/* <Link to="/about"> */}
        <li>
          ABOUT
          <ul>
            <Link to="/about-us">
              <li>About Us</li>
            </Link>
            <Link to="/about-me">
              <li>About Me</li>
            </Link>
          </ul>
        </li>
        {/* </Link> */}

        <Link to="/blog">
          <li>
            BLOG
            <ul>
              <li>
                Categories
                <ul className="categories">
                  {categories?.map((category) => (
                    <li key={category?._id}>{category?.name}</li>
                  ))}
                </ul>
              </li>

              {/* </Link>    */}
              <li></li>
              <li></li>
            </ul>
          </li>
        </Link>

        <li style={{ color: "#551A8B" }}>
          PAGES
          <ul>
            <li onClick={() => navigate("about")}>About</li>
            <li onClick={() => navigate("blog")}>Blog</li>
            <li onClick={() => navigate(user ? "/shop" : "/")}>Shop {user ? "" :"🔐" }</li>
            <li onClick={() => navigate("news")}>News</li>
            <li onClick={() => navigate("categories")}>Categories</li>
          </ul>
        </li>

        <Link to="/contact">
          <li>CONTACT</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
