import { useState } from "react";
import "../assets/scss/_video.scss"

function Video({code}) {
  const [isVideo, setVideo] = useState()

  const playHandler = () => {
    setVideo(true);
  }
  return (
    <div className="video-wrapper">
      {
        isVideo 
        ?  <iframe width="560" height="315" src={`https://www.youtube.com/embed/${code}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen /> 
        : <>
          <img src={`https://img.youtube.com/vi/${code}/maxresdefault.jpg`} alt="" />
          <button type="button" className="video-play-btn"  title="Play Video" tabIndex="0" onClick={playHandler}></button>
        </>
      }
    </div>
  )
}
export default Video;