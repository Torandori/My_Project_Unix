import { useRef, useEffect } from "react";
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';

function TiltedCardCont({item}) {

  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 20,
        speed: 100,
        glare: true,
        "max-glare": 0.3
      });
    }

    return () => {
    };
  }, []);
  return (
    <div className="tiltEl" ref={cardRef}>
      {/* <LazyLoadImage src={item.socImg} alt={item.socImgAlt} effect="blur" /> */}
      <img src={item.socImg} alt={item.socImgAlt} />
    </div>
  )
}

export default TiltedCardCont;