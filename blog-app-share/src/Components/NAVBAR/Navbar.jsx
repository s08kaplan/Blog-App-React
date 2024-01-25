import { CiSearch } from "react-icons/ci";
import { GrCart } from "react-icons/gr";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const modalRef = useRef("")


  const handleOpen = () => {
    setOpen(!open)
  }

  const handleClose = (e) => {
if(modalRef.current && !modalRef.current.contains(e.target)){
  setOpen(false)
  console.log(modalRef.current);
  console.log(e.target);
}

useEffect(()=> {
  document.addEventListener("click",handleClose)

  return() => (document.removeEventListener("click",handleClose))
  
},[])
  }
  
  return (
    <nav className={`header-container ${open ? 'modal-active' : ''}`}>
      <div className="container">
        <div onClick={handleOpen}><RxHamburgerMenu /> </div>
        { open && <div className="modal" ref={modalRef}>modal active</div>}
      
        <div className="logo">PYSCRIPT-BLOGGER</div>
        <div className="nav-icons">
          <CiSearch />
          <GrCart />
        </div>
      </div>

      <ul className="main-ul">
        <li>
          HOME
          {/* dropdown categories */}
        </li>

        <li>
          ABOUT
          <ul>
            <li>About Us</li>
            <li>About Me</li>
          </ul>
        </li>

        <li>
          BLOG
          {/*add new blog will be here */}
          <ul>
            <li>Category 1</li>
            <li></li>
            <li></li>
          </ul>
        </li>

        <li>
          PAGES
          {/* ! pages will be here */}
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Shop</li>
            <li>news</li>
          </ul>
        </li>

        <li>CONTACT</li>

      </ul>
      {/* Avatar will be here */}

    </nav>
  );
};

export default Navbar;
