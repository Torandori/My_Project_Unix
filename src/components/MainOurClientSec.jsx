import { lazy, Suspense } from 'react';
const SliderClient = lazy(() => import('./SliderClient'));

// import SliderClient from './SliderClient';

function MainOurClientSec() {

  return (
    <section id="our-client">
      <div className="container">
        <Suspense fallback={'loading'}>
          <SliderClient /> 
        </Suspense>
      </div>
    </section>
  )
}
export default MainOurClientSec;