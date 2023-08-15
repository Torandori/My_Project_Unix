import { useParallax } from "react-scroll-parallax";

function ImgPar({item}) {
  console.log(item)

  const { parallaxStyles } = useParallax<HTMLDivElement>({
    rotate: [0, 360],
  });
  return (
    <div className="img-wrap spinner"  style={parallaxStyles} >
      <img src={item.caseImgUrl} alt={item.caseImgAlt} />
      <div className="overlay"></div>
    </div>
  )
}
export default ImgPar;