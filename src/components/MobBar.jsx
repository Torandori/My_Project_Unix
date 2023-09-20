import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { MainNav } from '../data/navigation';

function MobBar(){

  const toggleMenu = () => {
    const hambBtn = document.getElementById('hamb-btn');
    const mobileSidebar = document.getElementById('mobile-sidebar');
    const shadow = document.getElementById('shadow');

    hambBtn.classList.toggle("is-active");
    mobileSidebar.classList.toggle("open");
    shadow.classList.toggle("show");

    if (hambBtn.classList.contains("is-active")) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  useEffect(() => {
    const hambBtn = document.getElementById('hamb-btn');
    const menuLinks = document.querySelectorAll('.menu-link');
    const shadow = document.getElementById('shadow');

     hambBtn.addEventListener('click', toggleMenu);
    for (const link of menuLinks) {
      link.addEventListener('click', toggleMenu);
    }
    shadow.addEventListener('click', toggleMenu);

    return () => {
      hambBtn.removeEventListener('click', toggleMenu);
      for (const link of menuLinks) {
        link.removeEventListener('click', toggleMenu);
      }
      shadow.removeEventListener('click', toggleMenu);
    };
  }, []);

  return(
    <>
      <div id="mobile-sidebar">
        <nav className="mob-menu">
          <ul>
            {MainNav.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink to={item.to} title={item.title} className="menu-link">{item.name}</NavLink>
                </li>
              )
            })}
          </ul>
        </nav> 
      </div>
      <div id="shadow"></div>
    </>
  )
}

export default MobBar;