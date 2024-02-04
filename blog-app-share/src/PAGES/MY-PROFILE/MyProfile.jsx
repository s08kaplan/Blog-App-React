import { useSelector } from "react-redux"
import "./MyProfile.scss"

const MyProfile = () => {
  const { user } = useSelector(state=> state.auth)
  return (
    <section className="profile-main">
      <div className="container">
        { user.username ? 
        <>
          (<img src={user?.image} alt="user-image" />
        <span>{user?.firstName} </span>
        <span>{user?.lastName} </span>
        <span>{user?.email}</span>
        <p>{user?.bio}</p>) 
        </>
        : (<span>Sorry something went wrong please log in </span> )}
      
      
      
        
      </div>
     
    </section>
  )
}

export default MyProfile