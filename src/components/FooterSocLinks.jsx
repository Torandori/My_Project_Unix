import { Link } from 'react-router-dom'
import footerSocLinks from '../data/footerSocLinks.json'

function FooterSocLinks(){
  return(
    <ul>
      {footerSocLinks.map((item, index) => {
        return (
          <li key={index}>
            <Link to={item.iconTo} title={item.iconTitle} target="_blank" rel="noreferrer nofollow">{item.iconName}</Link>
          </li>
        )
      })}
    </ul>
  )
}
export default FooterSocLinks;