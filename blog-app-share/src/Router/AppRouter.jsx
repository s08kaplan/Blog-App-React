import { Routes, Route } from "react-router-dom";
import Home from "../PAGES/HOME/Home";
import About from "../PAGES/ABOUT/About";
import Blog from "../PAGES/BLOG/Blog";
import PrivateRouter from "./PrivateRouter";
import ShopPage from "../PAGES/SHOP/ShopPage";
import BlogDetails from "../PAGES/BLOG-DETAILS/BlogDetails";
import Login from "../PAGES/LOGIN/Login";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login/>} />
      <Route path="about" element={<About />} />
      <Route path="blog" element={<Blog />} />
      <Route path="shop" element={<PrivateRouter />}>
        <Route path="" element={<ShopPage />} />
        <Route path="blog-details" element={<BlogDetails/>} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
