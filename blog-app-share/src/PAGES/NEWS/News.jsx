import { useEffect } from "react";
import "./News.scss";
import useNewsCall from "../../SERVICES/useNewsCall";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import "./News.scss"

const News = () => {
  const { getNews } = useNewsCall();
  const { news } = useSelector((state) => state.news);
  console.log(news);
  useEffect(() => {
    getNews();
  }, []);

  return (
    <section className="news-main">
      <div className="container">
        {news?.articles?.map((article) => (
          <div className="news-card" key={uuidv4()}>
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
