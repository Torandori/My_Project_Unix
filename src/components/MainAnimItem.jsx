
import { useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
import '../assets/scss/_tiltCardProj.scss'

function MainAnimItem({item}) {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".tiltElProj"), {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.3
    });
  }, []);
  return (
    <div className="tiltElProj">
      <img src={item.projImgUrl} alt={item.projAlt} />
    </div>
  )
}
export default MainAnimItem;