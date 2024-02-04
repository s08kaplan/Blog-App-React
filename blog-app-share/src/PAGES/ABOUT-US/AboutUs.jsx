import logo from "../../assets/pyscript.png"
import "./AboutUs.scss"

const AboutUs = () => {
    
  return (
    <section className='about-us-main'>
        <div className="about-us-container">
            <div className="about-us">
                <h2>About Us</h2>
                <h4>Hello! I'm  Alp Yavuz at your serve </h4>
                <p>
                    We are a group of Full-Stack Developers to Serve you by using the modern tools and frameworks.
In our web-site we targeted to help you and make less your stress. 
You can find news, blogs and more in our peaceful area.
<span>Have a nice Day </span> 
                </p>
            </div>
            <img src={logo} alt="logo" />
        </div>

    </section>
  )
}

export default AboutUs