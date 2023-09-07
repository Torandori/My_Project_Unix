import { lazy, Suspense } from 'react';
const Lottie  = lazy(() => import('lottie-react'));
// import Lottie from "lottie-react"
import load from '../assets/other/load2.json'

function Loader() {
  return (
    <div className="loader">
      <div className="load-size">
        <Suspense fallback={'loading'}>
          <Lottie animationData={load} />
        </Suspense>
      </div>
    </div>
  )
}
export default Loader;