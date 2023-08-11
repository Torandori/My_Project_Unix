import videoData from '../data/mainVideoSecData.json'
import { Link } from 'react-router-dom';

function MainVideoSec() {
  return (
    <section id="video-sec">
      <div className="container">
        <h2 className="h2">{videoData.videoTitle}</h2>
        <div className="video-wrap">
          {/* <iframe width="100%" height="700px" src="https://www.youtube.com/embed/FO3MaJxLU5E" title="YouTube video player" style="border: 0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        </div>
        <div className="flex-wrap">
          <div className="wrap">
            <div className="video-descr panchang">{videoData.videoDescrTitle}</div>
            <div>{videoData.videoUnder}</div>
          </div>
          <Link to={videoData.videoLinkTo} className="small-link" title={videoData.videoLinkTitle}>{videoData.videoLinkText}</Link>
        </div>
      </div>
    </section>
  )
}
export default MainVideoSec;