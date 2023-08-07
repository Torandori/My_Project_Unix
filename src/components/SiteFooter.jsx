import '../assets/scss/style.scss'
import '../assets/scss/_footer.scss'
import footerPic from '../assets/images/footer-pic.jpg'
import btnCircle from '../assets/images/svg/btnCircle.svg'
import footerArrow from '../assets/images/svg/footerArrow.svg'

function SiteFooter() {
  return ( 
    <footer id="footer">
      <div className="container">
        <div className="footer-flex">
          <div className="left-col">
            <div className="soc-media">
              <ul>
                <li>
                  <a href="https://www.linkedin.com" title="Linkedin" target="_blank" rel="noreferrer nofollow">Linkedin</a>
                </li>
                <li>
                  <a href="https://www.instagram.com" title="Instagram" target="_blank" rel="noreferrer nofollow">Instagram</a>
                </li>          
                <li>
                  <a href="https://dribbble.com" title="Dribble" target="_blank" rel="noreferrer nofollow">Dribble</a>
                </li>          
                <li>
                  <a href="https://www.behance.net" title="Behance" target="_blank" rel="noreferrer nofollow">Behance</a>
                </li>          
                <li>
                  <a href="https://www.facebook.com" title="Facebook" target="_blank" rel="noreferrer nofollow">Facebook</a>
                </li>
              </ul>
            </div>
            <div className="footer-title">
              <div className="small-text">our team is</div>
              <div className="h4">in newyork, usa</div>
            </div>
            <div className="footer-contact">
              <div className="small-text">drop us a line</div>
              <a href="mailto: Hello@unixstudio.agency">Hello@unixstudio.agency</a>
            </div>
            <button type="button" className="btn footer-btn">
              become a client <img src={footerArrow} alt="Arrow" className="footerArrow" />
            </button>
            <p className="copy">© 2023 Unix Studio. — Product Design Agency</p>
            <button type="button" className="btn btn-circle">
              <img src={btnCircle} alt="Contact us" />
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