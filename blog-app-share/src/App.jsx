import Carousel from "./Components/CAROUSEL/Carousel";
import Navbar from "./Components/NAVBAR/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./Router/AppRouter";
import Footer from "./Components/FOOTER/Footer";
import  store, { persistor } from './STORE/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import "./scss/_reset.scss";

function App() {
  return (
    <main>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        
      
      <Router>

        <Navbar />

        <AppRouter />
        
        {/* <Carousel /> */}
        {/* <Footer /> */}

      </Router>  
      </PersistGate>
      </Provider>
      
    </main>
  );
}

export default App;
