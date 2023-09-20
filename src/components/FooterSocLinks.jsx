import { Link } from 'react-router-dom'
import footerSocLinks from '../data/footerSocLinks.json'

function FooterSocLinks(){
  return(
    <ul>
      {footerSocLinks.map((item) => {
        return (
          <li key={item.iconName}>
            <Link to={item.iconTo} title={`Move to our social media` + `${item.iconTitle}`} target="_blank" rel="noreferrer nofollow">{item.iconName}</Link>
          </li>
        )
      })}
    </ul>
  )
}
export default FooterSocLinks;