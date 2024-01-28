import Carousel from "./Components/CAROUSEL/Carousel";
import Navbar from "./Components/NAVBAR/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./Router/AppRouter";
import Footer from "./Components/FOOTER/Footer";
import  store from './STORE/store'
import { Provider } from 'react-redux'
import "./scss/_reset.scss";

function App() {
  return (
    <main>
      <Provider store={store}>
      <Router>

        <Navbar />

        <AppRouter />
        
        {/* <Carousel /> */}
        <Footer />

      </Router>  
      </Provider>
      
    </main>
  );
}

export default App;
