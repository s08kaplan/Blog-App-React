import { useSelector } from "react-redux"
import { profileUpdate } from "./profileHelper"
import "./MyProfile.scss"
import { useState } from "react"
import { HiOutlineLockOpen, HiOutlineLockClosed } from "react-icons/hi";
import useAxios from "../../SERVICES/useAxios";

const MyProfile = () => {
  const { user } = useSelector(state=> state.auth)
  const { users } = useSelector(state=> state.blog)
  const { useAxiosWithToken } = useAxios()
  const [showProfile, setShowProfile] = useState(false)
  const [inputs, setInputs] = useState({
    username:"",
    password:"",
    email:"",
    firstName:"",
    lastName:"",
    image:"",
    city:"",
    bio:""
  })
 console.log(users[0]._id);
  const handleChange = (e) => {
    setInputs({...inputs,[e.target.name]:e.target.value})
  }

  const updateUser = async (inputs) => {
    try {
      await useAxiosWithToken.patch(`users/${users[0]._id}`,inputs)
    } catch (error) {
      console.log("error in updating profile");
    }
    
  }

const handleSubmit = (e) => {
  e.preventDefault()
 updateUser(inputs)
 setInputs("")
}


  return (
    <section className="profile-main">
      <div className="container">
        { user.username ? 
        <>
          <img src={user?.image} alt="user-image" />
        <span>{user?.firstName} </span>
        <span>{user?.lastName} </span>
        <span>{user?.email}</span>
        <p>{user?.bio}</p>
        </>
        : <span>Sorry something went wrong please log in </span> }
      
      </div>
      <div className="profile-update">
        <div onClick={()=>setShowProfile(!showProfile)}>
       {!showProfile ? <HiOutlineLockOpen /> : <HiOutlineLockClosed />}
        </div>
      </div>
      <div className="update-show"></div>
      {showProfile && (<div className="update-profile-main">
      <div className="update-profile-container">
        {profileUpdate.map(info => (
           <div key={info.id} className={info.name}>
<label htmlFor={info.name}>{info.name}</label>
<input
 type={info.type}
 name={info.name}
 id={info.id}
onChange={handleChange}
 />

 
        </div>
        ))}
     <button type="submit" onClick={handleSubmit} >SAVE</button>  
      </div>
     </div>)}
     
    </section>
  )
}

export default MyProfile