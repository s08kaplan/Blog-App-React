import { CiSearch } from "react-icons/ci";
import { GrCart } from "react-icons/gr";
import Avatar from "react-avatar";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import NavbarSearch from "../NAVBAR-SEARCH/NavbarSearch";
import "./Navbar.scss";
import useAuthCalls from "../../SERVICES/useAuthCalls";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [avatarLog, setAvatarLog] = useState(false)
  const { user } = useSelector(state => state.auth)
  const { logout } = useAuthCalls()
  const { categories } = useSelector(state=> state.blog)

  const navigate = useNavigate()

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
    setAvatarLog(!avatarLog)
  }

  return (
    <nav className={`header-container ${open ? "modal-active" : ""}`}>
      <div className="container">
        <div onClick={handleOpen}>
          <RxHamburgerMenu />
        </div>
        {open && <div className="modal">modal active</div>}

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
          
            <GrCart />
          

          <div className="avatar-container" onClick={logInfo}>
               <Avatar
              size="50"
              src="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
              round=".8rem"
            />
            <ul className="avatar-dropdown" style={{display: avatarLog ? "block" : "none"}}>
             <Link to="my-profile"><li>My Profile</li> </Link> 
             <Link to={!user && "/login"}>
              <li onClick={()=> user ? logout() : ""} >
                {user ? "Log out"   : " Log in"}
              </li> 
              </Link> 
             <Link><li></li> </Link> 
             <Link><li></li> </Link> 
            </ul>
          </div>
         
          
        </div>
      </div>

      <ul className="main-ul">
        <Link to="/">
          <li>
            HOME
            {/* dropdown categories */}
          </li>
        </Link>

        <Link to="/about">
          <li>
            ABOUT
            <ul>
              <li>About Us</li>
              <li>About Me</li>
            </ul>
          </li>
        </Link>

        <Link to="/blog">
          <li>
            BLOG
            {/*add new blog will be here */}
            <ul>
           {/* <Link to="/categories"> */}

            <li>Categories
              <ul>
{categories?.map(category=> (
  <li key={category?._id}>
{category?.name}
  </li>
))}
              </ul>
            </li>

            {/* </Link>    */}
              <li></li>
              <li></li>
            </ul>
          </li>
        </Link>

        
          <li>
            PAGES
            {/* ! pages will be here */}
            <ul>
            {/* <Link to="/about"><li>About</li></Link>  
           <Link to="/blog"> <li>Blog</li></Link>  
           <Link to={user ? "/shop" : "/"}><li>Shop 🔐 </li></Link>   
           <Link><li>news</li></Link>    */}
            <li onClick={()=>navigate("about")}>About</li> 
           <li onClick={()=> navigate("blog")}>Blog</li>  
           <li onClick={()=> navigate(user ? "/shop" : "/")}>Shop 🔐 </li> 
           <li onClick={()=> navigate("news")}>news</li>   
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
