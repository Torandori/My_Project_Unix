import Loader from "./Loader";
import '../assets/scss/_fallback.scss'

function FallBack() {
  return(
    <div className="fallback">
      <Loader />
    </div>
  )
}
export default FallBack;