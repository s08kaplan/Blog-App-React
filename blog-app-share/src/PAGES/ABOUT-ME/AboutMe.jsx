import React from 'react'
import { useSelector } from 'react-redux'
import logo from "../../assets/pyscript-2.png"

const AboutMe = () => {
    const { user } = useSelector(state => state.auth)
  return (
    <section className='about-me-main'>
<div className="about-me-container">
{ user.username ? (<div> 
    <img src={user?.image} alt={user?.username} />
</div> )
:
(<img src={logo} alt="logo" /> )
}
</div>
    </section>
  )
}

export default AboutMe