import { Link } from 'react-router-dom';
import footerArrow from '../assets/images/svg/footerArrow.svg'

function FooterBtnBec() {
  return (
    <>
      <Link to="/contacts" type="button" className="btn footer-btn" title="Open contacts form"> 
        become a client <img src={footerArrow} alt="Arrow" className="footerArrow" />
      </Link>
    </>
  )
}
export default FooterBtnBec;
