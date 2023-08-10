import { Routes, Route } from "react-router-dom";
import Default from "./layouts/default";
import Home from "./pages/Home";
import Case from "./pages/Case";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import About from "./pages/About";
import Contacts from "./pages/Contacts";

import './assets/scss/style.scss'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route index element={<Home />}/>
        <Route path="case" element={<Case />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/services/:slug" element={<ServiceDetails />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contacts" element={<Contacts />}/>
      </Route>
    </Routes>
  )
}

export default App;

