import footerArrow from '../assets/images/svg/footerArrow.svg'

function FooterBtnBec() {
  return (
    <>
      <button type="button" className="btn footer-btn">
        become a client <img src={footerArrow} alt="Arrow" className="footerArrow" />
      </button>
    </>
  )
}
export default FooterBtnBec;
