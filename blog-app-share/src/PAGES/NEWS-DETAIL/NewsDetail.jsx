import { useNavigate, useParams } from "react-router-dom"
import "./NewsDetail.scss"
import { useSelector } from "react-redux"


const NewsDetail = () => {
    const { newsId } = useParams()
    const { news } = useSelector(state=> state.news)
const navigate = useNavigate()
  
  return (
    <section className="news-detail-main">
        <div className="container">
        {newsId ? (
                    <div className="selected-news">
                        <img src={news.articles[newsId].urlToImage} alt={news.articles[newsId].title} />
                        <h2>{news.articles[newsId].title}</h2>
                        <p>{news.articles[newsId].content}</p>
                        {/* <a a href={news.articles[newsId].url} target="_blank" >More Details</a> */}
                    </div>
                ):( <div>The News is NOT found or JUST removed</div> )}
           
        </div>

    </section>
  )
}

export default NewsDetail