import { lazy, Suspense } from 'react';
const SliderClient = lazy(() => import('./SliderClient'));
import Loader from "../components/Loader";

function MainOurClientSec() {

  return (
    <section id="our-client">
      <div className="container">
        <Suspense fallback={<Loader />}>
          <SliderClient /> 
        </Suspense>
      </div>
    </section>
  )
}
export default MainOurClientSec;