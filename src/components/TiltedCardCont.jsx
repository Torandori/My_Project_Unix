import { useRef, useEffect } from "react";

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
      <img src={item.socImg} alt={item.socImgAlt} />
    </div>
  )
}

export default TiltedCardCont;