import { useEffect } from "react"
import useBlogData from "../../SERVICES/useBlogData"
import "./Home.scss"
import { useSelector } from "react-redux"
import Spinner from "../../Components/SPINNER/Spinner"

const Home = () => {
const { getAllBlogData } = useBlogData()
const { users, blogs } = useSelector(state=> state.blog)
useEffect(()=>{
  getAllBlogData()
  
},[])

console.log(users);
console.log(blogs);

  return (
    <main className="home-main">
      <div className="container">
        { users.loading || blogs.loading ? (<div className="spinner"> <Spinner/></div>) : (<div className="side-container">
{users?.map(user=>(
<div className="side-list" key={user?._id}>
 <span> {user?.username}</span>
 <img src={user?.image} alt={user?.username} />
</div>
))}
        </div>) }
        
        <div className="home-cards">

        </div>
      </div>

    </main>
  )
}

export default Home