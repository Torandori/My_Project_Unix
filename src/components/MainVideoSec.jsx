import { Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import videoData from '../data/mainVideoSecData.json'
const Video = lazy(() => import('./Video'));
import Loader from "../components/Loader";

function MainVideoSec() {
  return (
    <section id="video-sec">
      <div className="container">
        <h2 className="h2" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="500">{videoData.videoTitle}</h2>
          <Suspense fallback={<Loader />}>
            <Video code="FO3MaJxLU5E" />
          </Suspense>
        <div className="flex-wrap">
          <div className="wrap" data-aos="fade-in" data-aos-easing="ease-in-quad" data-aos-duration="500">
            <div className="video-descr panchang">{videoData.videoDescrTitle}</div>
            <div>{videoData.videoUnder}</div>
          </div>
          <Link to={videoData.videoLinkTo} className="small-link" title={videoData.videoLinkTitle} data-aos="zoom-in-up" data-aos-easing="ease-in-sine" data-aos-duration="500" data-aos-delay="200">
            <span className="mask">
              <div className="small-link-container">
                <span className="small-link-title1 title">{videoData.videoLinkText}</span>
                <span className="small-link-title2 title">{videoData.videoLinkText}</span>
              </div>
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
export default MainVideoSec;