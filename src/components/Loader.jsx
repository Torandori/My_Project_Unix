import Lottie from "lottie-react"
import load from '../assets/other/load2.json'

function Loader() {
  // document.body.style.overflow = 'hidden'; 
  return (
    <div className="loader">
      <Lottie animationData={load} />
    </div>
  )
}
export default Loader;