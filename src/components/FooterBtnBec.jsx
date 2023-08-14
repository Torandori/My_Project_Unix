import footerArrow from '../assets/images/svg/footerArrow.svg'
import footerData from '../data/footerData.json'
import '../assets/scss/_footerBtn.scss'
import '../helpers/footerBtn.js'

function FooterBtnBec() {
  return (
    <>
      <svg style="position: absolute; width: 0; height: 0;" width="0" height="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" className="svg-sprite">
      <defs>
          <filter id="filter">
              <feTurbulence type="fractalNoise" baseFrequency="0.000001 0.000001" numOctaves="1" result="warp" seed="1"></feTurbulence>
              <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warp"></feDisplacementMap>
          </filter>
      </defs>
      </svg>
      <div className="btn btn-small btn-dark btn-glitch">Bitch'n</div>
    </>
  )
}
export default FooterBtnBec;
// className="btn footer-btn"
    <button type="button" className="sketch-button" >
      {footerData.footerBtnBec}<img src={footerArrow} alt="Arrow" className="footerArrow" />
    </button>