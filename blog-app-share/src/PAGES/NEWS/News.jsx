import { useEffect } from "react";
import "./News.scss";
import useNewsCall from "../../SERVICES/useNewsCall";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./News.scss"

const News = () => {
  const { getNews } = useNewsCall();
  const { news } = useSelector((state) => state.news);
  const navigate = useNavigate()
  console.log(news);
  useEffect(() => {
    getNews();
  }, []);

  const handleNewsDetail = (newsId) => {
    navigate(`/news-detail/${newsId}`)
  }

  return (
    <section className="news-main">
      <div className="container">
        {news?.articles?.map((article,index) => (
          <div className="news-card" key={index}   onClick={()=>handleNewsDetail(index)}>
            <h3>{article?.title}</h3>
           <img src={article?.urlToImage} alt={article?.title} />
            <p className="news-description">{article?.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
