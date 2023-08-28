import Lottie from "lottie-react"
import load from '../assets/other/load2.json'

function Loader() {
  // document.body.style.overflow = 'hidden'; 
  return (
    <div className="loader">
      <div className="load-size">
        <Lottie animationData={load} />
      </div>
    </div>
  )
}
export default Loader;