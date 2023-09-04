import { useParallax } from "react-scroll-parallax";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function ImgPar({item}) {
  console.log(item)

  const { parallaxStyles } = useParallax<HTMLDivElement>({
    rotate: [0, 360],
  });
  return (
    <div className="img-wrap spinner"  style={parallaxStyles} >
      <LazyLoadImage
      alt={item.caseImgAlt}
      src={item.caseImgUrl}
      effect="blur" 
      />
      <div className="overlay"></div>
    </div>
  )
}
export default ImgPar;