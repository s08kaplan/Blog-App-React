import Carousel from "./Components/CAROUSEL/Carousel";
import Navbar from "./Components/NAVBAR/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import "./scss/_reset.scss";
import AppRouter from "./Router/AppRouter";
import Footer from "./Components/FOOTER/Footer";

function App() {
  return (
    <main>
      <Navbar />

      <Router>
        <AppRouter />
      </Router>

      <Carousel />
      <Footer/>
    </main>
  );
}

export default App;
