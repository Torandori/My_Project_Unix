import { Routes, Route } from "react-router-dom";
import Default from "./layouts/default";
import Home from "./pages/Home";
import './assets/scss/style.scss'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Default/>}>
        <Route index element={<Home/>}/>
      </Route>
    </Routes>
  )
}

export default App;

