import Flake from "./svgComponents/Flake";
import "../assets/scss/_loader.scss"

function Loader() {
  // document.body.style.overflow = 'hidden'; 
  return (
    <div className="loader">
      <div className="loader-3d"></div>
    </div>
  )
}
export default Loader;