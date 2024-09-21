import React,{useState,useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes,useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import TripCatalog from './pages/TripCatalog';
import Contact from './pages/Contact';
import TourReview from './pages/TourReview';
import DestinationDetails from './pages/DestinationDetails';
import TripCatalogDetails from './pages/TripCatalogDetails';
import SiteMap from './pages/SiteMap';
import ScrollToTop from './components/ScrollToTop';
import Faq from './pages/Faq';
import FadeLoader from "react-spinners/FadeLoader";

function Loader({ isLoading }) {
  return isLoading ? (
    <div className="flex justify-center items-center h-screen w-full bg-tertiary   bg-opacity-30">
      <FadeLoader color="#2095AE" size={150} />
    </div>
  ) : null;
}



function App() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation(); 

  // This useEffect runs every time we change pages
  useEffect(() => {
    setIsLoading(true); // Start the loader
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 1000); 

    return () => clearTimeout(timer); 
  }, [location]); 




  return (
  <div className='relative'>
      {/* <Router> */}
      <Loader isLoading={isLoading} />
      <ScrollToTop />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/tripCatalog' element={<TripCatalog />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path="/destinationDetails/:id" element={<DestinationDetails />} />
        <Route path='/tourReview' element={<TourReview />}></Route>
        <Route path="/trip/:id" element={<TripCatalogDetails />} />
        <Route path='/sitemap' element={<SiteMap />}></Route>
        <Route path='/faq' element={<Faq />}></Route>
    
      </Routes>
    {/* </Router> */}
  </div>
  )
}

function WrappedApp() {
  return (
    <Router>
        <App />
    </Router>
  );
}

export default WrappedApp;
