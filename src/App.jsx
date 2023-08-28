import {Routes, Route, BrowserRouter as Router, useLocation} from 'react-router-dom';
import {useLayoutEffect} from 'react';
import Default from "./layouts/default";
import DarkLayout from "./layouts/DarkLayout";
import { lazy, Suspense } from 'react';
// import { LazyExoticComponent } from 'react';
// import { ParallaxProvider } from 'react-scroll-parallax';
import Home from "./pages/Home";
const LazyCase = lazy(() => import("./pages/Case"))
const LazyServices = lazy(() => import("./pages/Services"));
const LazyServiceDetails = lazy(() => import("./pages/ServiceDetails"));
const LazyAbout = lazy(() => import("./pages/About"));
const LazyNews = lazy(() => import("./pages/News"));
const LazyContacts = lazy(() => import("./pages/Contacts"));
const LazyNewsDetails = lazy(() => import("./pages/NewsDetails"));
const LazyNotFound = lazy(() => import('./pages/NotFound'));




// import Case from "./pages/Case";
// import Services from "./pages/Services";
// import ServiceDetails from "./pages/ServiceDetails";
// import About from "./pages/About";
// import News from "./pages/News";
// import Contacts from "./pages/Contacts";
// import NewsDetails from './pages/NewsDetails';
// import NotFound from './pages/NotFound';




import './assets/scss/style.scss'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      {/* <ParallaxProvider> */}
        <Routes>
          <Route path="/" element={<Default />}>
            <Route index element={<Home />}/>
            <Route path="/case" element={<Suspense fallback='ha'><LazyCase /></Suspense>}/>
            <Route path="/services" element={<Suspense fallback='ha'><LazyServices /></Suspense>}/>
            <Route path="/services/:slug" element={<Suspense fallback='ha'><LazyServiceDetails /></Suspense>}/>
            <Route path="/about" element={<Suspense fallback='ha'><LazyAbout /></Suspense>}/>
            <Route path="/news" element={<Suspense fallback='ha'><LazyNews/></Suspense>}/>
            <Route path="news/:hash" element={<Suspense fallback='ha'><LazyNewsDetails/></Suspense>}/>



            {/* <Route path="/case" element={<Case />}/> */}
            {/* <Route path="/services" element={<Services />}/> */}
            {/* <Route path="/services/:slug" element={<ServiceDetails />}/> */}
            {/* <Route path="/about" element={<About />}/> */}
            {/* <Route path="/news" element={<News />}/> */}
            {/* <Route path="news/:hash" element={<NewsDetails/>}/> */}
          </Route>
          <Route path="*" element={<Suspense fallback='ha'><LazyNotFound/></Suspense>}/>
          {/* <Route path="*" element={<NotFound />}/> */}

          <Route path="/" element={<DarkLayout />}>
            <Route path="/contacts" element={<Suspense fallback='ha'><LazyContacts /></Suspense>}/>
            {/* <Route path="/contacts" element={<Contacts />}/> */}

          </Route>
        </Routes>
      {/* </ParallaxProvider> */}
      <ToastContainer theme="dark" pauseOnHover position="bottom-left"/>
    </Wrapper>
  )
}

export default App;

