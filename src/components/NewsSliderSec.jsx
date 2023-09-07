import SliderNewsLine from "./SliderNewsLine";
// import { lazy, Suspense } from 'react';
// const SliderNewsLine = lazy(() => import('./SliderNewsLine'));

function NewsSliderSec() {

  return (
    <section id="slider-news-sec">
      <div className="container">
        {/* <Suspense fallback={'loading'}> */}
          <SliderNewsLine />
        {/* </Suspense> */}
      </div>
    </section>
  )
}
export default NewsSliderSec;
