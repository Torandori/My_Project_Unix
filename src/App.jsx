import {Routes, Route, BrowserRouter as Router, useLocation} from 'react-router-dom';
import {useLayoutEffect} from 'react';
import Default from "./layouts/default";
import DarkLayout from "./layouts/DarkLayout";
import Home from "./pages/Home";
import Case from "./pages/Case";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import News from "./pages/News";
import NewsDetails from './components/NewsDetails';
import NotFound from './pages/NotFound';
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
      <Routes>
        <Route path="/" element={<Default />}>
          <Route index element={<Home />}/>
          <Route path="/case" element={<Case />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/services/:slug" element={<ServiceDetails />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/news" element={<News />}/>
          <Route path="news/:hash" element={<NewsDetails/>}/>
        </Route>
        <Route path="*" element={<NotFound />}/>
        <Route path="/" element={<DarkLayout />}>
          <Route path="/contacts" element={<Contacts />}/>
        </Route>
      </Routes>
      <ToastContainer theme="dark" pauseOnHover position="bottom-left"/>
    </Wrapper>
  )
}

export default App;

