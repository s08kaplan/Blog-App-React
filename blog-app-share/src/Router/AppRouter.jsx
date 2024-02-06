import { Routes, Route } from "react-router-dom";
import Home from "../PAGES/HOME/Home";
import About from "../PAGES/ABOUT/About";
import Blog from "../PAGES/BLOG/Blog";
import PrivateRouter from "./PrivateRouter";
import ShopPage from "../PAGES/SHOP/ShopPage";
import BlogDetails from "../PAGES/BLOG-DETAILS/BlogDetails";
import Login from "../PAGES/LOGIN/Login";
import MyProfile from "../PAGES/MY-PROFILE/MyProfile";
import Contact from "../PAGES/CONTACT/Contact";
import Register from "../PAGES/REGISTER/Register";
import News from "../PAGES/NEWS/News";
import NewsDetail from "../PAGES/NEWS-DETAIL/NewsDetail";
import AboutUs from "../PAGES/ABOUT-US/AboutUs";
import AboutMe from "../PAGES/ABOUT-ME/AboutMe";
import CartPage from "../PAGES/CARTPAGE/CartPage";
import NotFound from "../PAGES/NOT-FOUND/NotFound";
import Categories from "../PAGES/CATEGORIES/Categories";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      {/* <Route path="about" element={<About />} /> */}
      <Route path="about-us" element={<AboutUs />} />
      <Route path="about-me" element={<AboutMe />} />
      <Route path="categories" element={<Categories />} />
      <Route path="news" element={<News />} />
      <Route path="news-detail/:newsId" element={<NewsDetail />} />
      <Route path="blog" element={<Blog />} />
      <Route path="blog-details/:idx" element={<BlogDetails />} />
      <Route path="contact" element={<Contact />} />
      <Route path="my-profile" element={<MyProfile />} />
      <Route path="shop" element={<PrivateRouter />}>
        <Route path="" element={<ShopPage />} />
      </Route>
      <Route path="cart-page/:cartId" element={<PrivateRouter />}>
        <Route path="" element={<CartPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
