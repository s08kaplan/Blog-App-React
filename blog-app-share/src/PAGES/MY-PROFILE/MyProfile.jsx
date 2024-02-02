import { useSelector } from "react-redux"
import "./MyProfile.scss"

const MyProfile = () => {
  const { user } = useSelector(state=> state.auth)
  return (
    <section className="profile-main">
      <div className="container">
        <img src={user?.image} alt="user-image" />
        <span>{user?.firstName} </span>
        <span>{user?.lastName} </span>
        <p>{user?.bio}</p>
      </div>
     
    </section>
  )
}

export default MyProfile