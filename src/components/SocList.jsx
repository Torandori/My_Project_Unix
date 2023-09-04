import React from 'react';
import { Link } from 'react-router-dom';
import LinkedinIcon from './svgComponents/LinkedinIcon';
import BehanceIcon from './svgComponents/BehanceIcon';
import FacebookIcon from './svgComponents/FacebookIcon';
import InstagramIcon from './svgComponents/InstagramIcon';

function SocList() {
  const socList = [
    {
      socItemUrl: "https://www.linkedin.com/",
      socItemTitle: "Link to Linkedin",
      socName: "linkedin",
      icon: <LinkedinIcon />
    },
    {
      socItemUrl: "https://behance.com",
      socItemTitle: "Link to Behance",
      socName: "behance",
      icon: <BehanceIcon />
    },
    {
      socItemUrl: "https://facebook.com",
      socItemTitle: "Link to Instagram",
      socName: "facebook",
      icon: <FacebookIcon />
    },
    {
      socItemUrl: "https://instagram.com",
      socItemTitle: "Link to Facebook",
      socName: "instagram",
      icon: <InstagramIcon />
    }
  ]

  return (
    <div className="soc-list-wrap">
      <ul className="soc-list">
        {socList.map((item, index) => {
          return (
            <li key={index} data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="500">
              <Link to={item.socItemUrl} title={item.socItemTitle} target="_blank" rel="nofollow noreferrer">
                {item.icon}
              </Link>
              <div className="soc-name">{item.socName}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default SocList;