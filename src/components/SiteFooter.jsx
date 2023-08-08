import { Link } from 'react-router-dom'
import '../assets/scss/style.scss'
import '../assets/scss/_footer.scss'
import footerPic from '../assets/images/footer-pic.jpg'
import btnCircleLight from '../assets/images/svg/btnCircleLight.svg'
import footerArrow from '../assets/images/svg/footerArrow.svg'
import footerData from '../data/footerData.json'
import FooterSocLinks from './FooterSocLinks'

function SiteFooter() {

  return ( 
    <footer id="footer">
      <div className="container">
        <div className="footer-flex">
          <div className="left-col">
            <div className="soc-media">
              <FooterSocLinks />
            </div>
            <div className="footer-title">
              <div className="small-text">{footerData.footerSubTitle}</div>
              <div className="h4">{footerData.footerLocation}</div>
            </div>
            <div className="footer-contact">
              <div className="small-text">{footerData.footerSmallText}</div>
              <Link to="mailto: Hello@unixstudio.agency">{footerData.footerEmail}</Link>
            </div>
            <button type="button" className="btn footer-btn">
              become a client <img src={footerArrow} alt="Arrow" className="footerArrow" />
            </button>
            <p className="copy">{footerData.footerCopy}</p>
            <button type="button" className="btn btn-circle">
              <img src={btnCircleLight} alt="Contact us" />
            </button>
          </div>
          <div className="right-col">
          </div>
        </div>
      </div>
      <img className="footer-pic" src={footerPic} alt="Team picture"/>
    </footer>
  )
}
export default SiteFooter;