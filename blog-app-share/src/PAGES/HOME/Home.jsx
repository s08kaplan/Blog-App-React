import { useEffect } from "react";
import useBlogData from "../../SERVICES/useBlogData";
import { useSelector } from "react-redux";
import Spinner from "../../Components/SPINNER/Spinner";
import "./Home.scss";

const Home = () => {
  const { getAllBlogData } = useBlogData();
  const { users, blogs } = useSelector((state) => state.blog);

  useEffect(() => {
    getAllBlogData();
  }, []);

  return (
    <main className="home-main">
      <div className="container">
        {users?.loading || blogs?.loading ? (
          <div className="spinner">
            {" "}
            <Spinner />
          </div>
        ) : (
          <div className="side-container">
            {users.length !== 0 &&
              users?.map((user) => (
                <div className="side-list" key={user?._id}>
                  <span> {user?.username}</span>
                  <img src={user?.image} alt={user?.username} />
                </div>
              ))}
          </div>
        )}

        <div className="home-cards"></div>
      </div>
    </main>
  );
};

export default Home;
