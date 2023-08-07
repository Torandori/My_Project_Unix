import '../assets/scss/_header.scss'
import logo from '../assets/images/logo.svg';
function SiteHeader(){

  return (
    <header id="header">
      <div className="container separator">
        <div id="logo">
          <a href="/">
            <img src={logo} alt="Unixstudio Logo" />
          </a>
        </div>
        <nav id="main-menu">
          <ul>
            <li><a href="/" title="Go to Home page">home</a></li>
            <li><a href="case.html" title="Go to Cases page">cases</a></li>
            <li><a href="services.html" title="Go to Services page">services</a></li>
            <li><a href="about.html" title="Go to About page">about</a></li>
            <li><a href="contacts.html" title="Go to Contacts page">contact</a></li>
            <li><a href="news.html" title="Go to News page">news</a></li>
          </ul>
        </nav>
        <div className="hamb-wrap">
          <button id="hamb-btn" className="hamburger hamburger--elastic" type="button">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}
export default SiteHeader;