import {Routes, Route, BrowserRouter as Router, useLocation} from 'react-router-dom';
import Default from "./layouts/default";
import Home from "./pages/Home";
import Case from "./pages/Case";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import DarkLayout from "./layouts/DarkLayout";
import News from "./pages/News";
import './assets/scss/style.scss'
import {useLayoutEffect} from 'react';
// import ScrollTop from "./components/scrollTop";

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
          {/* <Route path="/news" element={<News />}/> */}
        </Route>
        <Route path="/" element={<DarkLayout />}>
          <Route path="/contacts" element={<Contacts />}/>
        </Route>
      </Routes>
    </Wrapper>
  )
}

export default App;

