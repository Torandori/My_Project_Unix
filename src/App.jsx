import {Routes, Route, BrowserRouter as Router, useLocation} from 'react-router-dom';
import {useLayoutEffect, useState, useEffect} from 'react';
import Default from "./layouts/default";
import DarkLayout from "./layouts/DarkLayout";
import Home from "./pages/Home";
import Case from "./pages/Case";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import About from "./pages/About";
import News from "./pages/News";
import Contacts from "./pages/Contacts";
import NewsDetails from './pages/NewsDetails';
// import NewsDetailsFetch from './pages/NewsDetailsFetch';
import NotFound from './pages/NotFound';
import './assets/scss/style.scss'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ParallaxProvider } from 'react-scroll-parallax';

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}  
function App() {
  return (
    <Wrapper>
      <ParallaxProvider>
        <Routes>
          <Route path="/" element={<Default />}>
            <Route index element={<Home />}/>
            <Route path="/case" element={<Case />}/> 
            <Route path="/services" element={<Services />}/>
            <Route path="/services/:slug" element={<ServiceDetails />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/news" element={<News />}/>
            <Route path="news/:hash" element={<NewsDetails/>}/>
            {/* <Route path="news/:hash" element={<NewsDetailsFetch />}/> */}
          </Route>
          <Route path="*" element={<NotFound />}/>
          <Route path="/" element={<DarkLayout />}>
            <Route path="/contacts" element={<Contacts />}/>
          </Route>
        </Routes>
      </ParallaxProvider>
      <ToastContainer theme="dark" pauseOnHover position="bottom-left"/>
    </Wrapper>
  )
}

export default App;

