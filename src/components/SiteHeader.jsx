import { Link, NavLink } from 'react-router-dom';
import { MainNav } from '../data/navigation';
import logo from '../assets/images/svg/logo.svg';
import '../assets/scss/_header.scss'

function SiteHeader(){
  return (
    <header id="header">
      <div className="container separator">
        <div id="logo">
          <Link to="/" title="Move to main page">
            <img src={logo} alt="Unixstudio Logo" />
          </Link>
        </div>
        <nav id="main-menu">
          <ul>
            {MainNav.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink to={item.to} title={item.title}>{item.name}</NavLink>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className="hamb-wrap">
          <button id="hamb-btn" className="hamburger hamburger--elastic" type="button" aria-label="Menu button">
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