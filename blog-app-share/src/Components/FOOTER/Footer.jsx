import logo from "../../assets/pyscript-3.png"
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import "./Footer.scss"

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="icons">
        <FaFacebook />
        <FaXTwitter />
        <BsWhatsapp />
        <FaTelegramPlane />
        </div>
        <div className="footer-logo">
          <img src={logo} alt="" />
        </div>
      </div>
    </footer>
  )
}

export default Footer