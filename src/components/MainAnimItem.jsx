
import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import { lazy } from 'react';
lazy(() => import('../assets/scss/_tiltCardProj.scss'));
import { useMediaQuery } from 'react-responsive';

function MainAnimItem({item}) {
  const isMobile = useMediaQuery({ maxWidth: 1000 });
  const any = useRef(null)

  useEffect(() => {
    console.log('isMobile:', isMobile);
    if (!isMobile) {
      VanillaTilt.init(any.current, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.3
      });
    } 
  }, [isMobile]);

  return (
    <div className={isMobile ? 'projPic' : 'tiltElProj'} ref={isMobile ? null : any}>
      <img src={item.projImgUrl} alt={item.projAlt} />
    </div>
    // <div className='tiltElProj' ref={any}>
    //   <img src={item.projImgUrl} alt={item.projAlt} />
    // </div>
  )
}
export default MainAnimItem;