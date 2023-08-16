import footerArrow from '../assets/images/svg/footerArrow.svg'
import { Link } from 'react-router-dom';

function FooterBtnBec() {
  return (
    <>
      <Link to="/contacts" type="button" className="btn footer-btn">
        become a client <img src={footerArrow} alt="Arrow" className="footerArrow" />
      </Link>
    </>
  )
}
export default FooterBtnBec;
