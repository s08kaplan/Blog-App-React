import { useEffect } from "react"
import useBlogData from "../../SERVICES/useBlogData"
import "./Home.scss"

const Home = () => {
const { getAllBlogData } = useBlogData()

useEffect(()=>{
  getAllBlogData()
  
},[])



  return (
    <div >

    </div>
  )
}

export default Home