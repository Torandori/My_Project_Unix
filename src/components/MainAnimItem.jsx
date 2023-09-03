
import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import '../assets/scss/_tiltCardProj.scss';

function MainAnimItem({item}) {
  const any = useRef(null)

  useEffect(() => {
    VanillaTilt.init(any.current, {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.3
    });
  }, []);
  return (
    <div className="tiltElProj" ref={any}>
      <img src={item.projImgUrl} alt={item.projAlt} />
    </div>
  )
}
export default MainAnimItem;