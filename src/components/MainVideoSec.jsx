import videoData from '../data/mainVideoSecData.json'
import { Link } from 'react-router-dom';
import Video from './Video';

function MainVideoSec() {
  return (
    <section id="video-sec">
      <div className="container">
        <h2 className="h2">{videoData.videoTitle}</h2>
        <Video code="FO3MaJxLU5E" />
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