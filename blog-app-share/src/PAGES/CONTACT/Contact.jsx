import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { BsFillEnvelopeAtFill } from "react-icons/bs";
import "./Contact.scss"

const Contact = () => {
  return (
    <section className="contact-main">
      <div className="contact-container">
        <div className="contact-header">
          <h1>We are Happy to Keep in Touch!...</h1>
        </div>
        <div className="contact-body">
          <a href="mailto:garip@gmail.com">
          <BsFillEnvelopeAtFill />
            Mail Us:
            <h3>garip@gmail.com</h3>
          </a>
          <a href="tel:+905555555">Phone:</a>
        </div>
        <div className="contact-footer">
          <div className="icons">

            <div className="whatsapp" ><IoLogoWhatsapp /> </div>
            <div className="facebook"> <FaFacebook /> </div>
            <div className="instagram"> <IoLogoInstagram /> </div>
            <div className="telegram"> <FaTelegram /> </div>
           <div> <FaXTwitter /> </div>
            
            
          </div>
          <div className="arrow">
            <FaArrowAltCircleUp />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
