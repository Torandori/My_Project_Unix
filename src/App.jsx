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
import NotFound from './pages/NotFound';
import './assets/scss/style.scss'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ParallaxProvider } from 'react-scroll-parallax';
// import { lazy, Suspense } from 'react';
// import { LazyExoticComponent } from 'react';
// import Fallback from './components/Fallback';
// const LazyCase = lazy(() => import("./pages/Case"))
// const LazyServices = lazy(() => import("./pages/Services"));
// const LazyServiceDetails = lazy(() => import("./pages/ServiceDetails"));
// const LazyAbout = lazy(() => import("./pages/About"));
// const LazyNews = lazy(() => import("./pages/News"));
// const LazyContacts = lazy(() => import("./pages/Contacts"));
// const LazyNewsDetails = lazy(() => import("./pages/NewsDetails"));
// const LazyNotFound = lazy(() => import('./pages/NotFound'));
// import FallBackLoader from './components/FallbackLoader';
// import Loader from './components/Loader';

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}  
function App() {
  // const [showFallback, setShowFallback] = useState(true);

  // useEffect(() => {
  //   if (showFallback) {
  //     document.body.classList.add('no-scroll');
  //   } else {
  //     document.body.classList.remove('no-scroll');
  //   }
  // }, [showFallback]);
  return (
    <Wrapper>
      <ParallaxProvider>
        <Routes>
          <Route path="/" element={<Default />}>
            <Route index element={<Home />}/>
            {/* <Route path="/case" element={<Suspense fallback={showFallback && <Fallback />}><LazyCase /></Suspense>}/>
            <Route path="/services" element={<Suspense fallback={showFallback && <Fallback />}><LazyServices /></Suspense>}/>
            <Route path="/services/:slug" element={<Suspense fallback={showFallback && <Fallback />}><LazyServiceDetails /></Suspense>}/>
            <Route path="/about" element={<Suspense fallback={showFallback && <Fallback />}><LazyAbout /></Suspense>}/>
            <Route path="/news" element={<Suspense fallback={showFallback && <Fallback />}><LazyNews/></Suspense>}/>
            <Route path="news/:hash" element={<Suspense fallback={showFallback && <Fallback />}><LazyNewsDetails/></Suspense>}/> */}
            <Route path="/case" element={<Case />}/> 
            <Route path="/services" element={<Services />}/>
            <Route path="/services/:slug" element={<ServiceDetails />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/news" element={<News />}/>
            <Route path="news/:hash" element={<NewsDetails/>}/>
          </Route>
          {/* <Route path="*" element={<Suspense fallback={showFallback && <Fallback />}><LazyNotFound/></Suspense>}/> */}
          <Route path="*" element={<NotFound />}/>
          <Route path="/" element={<DarkLayout />}>
            {/* <Route path="/contacts" element={<Suspense fallback={showFallback && <Fallback />}><LazyContacts /></Suspense>}/> */}
            <Route path="/contacts" element={<Contacts />}/>
          </Route>
        </Routes>
      </ParallaxProvider>
      <ToastContainer theme="dark" pauseOnHover position="bottom-left"/>
    </Wrapper>
  )
}

export default App;

