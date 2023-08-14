import { useEffect } from 'react';
import HeroSec from '../components/HeroSec';
import MainAboutCeoSec from '../components/MainAboutCeoSec';
import MainAboutSec from '../components/mainAboutSec';
import MainOurClientSec from '../components/MainOurClientSec';
import MainPastProjectsSec from '../components/MainPastProjectsSec';
import MainVideoSec from '../components/MainVideoSec';
import MainWitnessSec from '../components/MainWitnessSec';
import MainWorthySec from '../components/MainWorthySec';
import '../assets/scss/main.scss'
import par from '../data/heroData.json'


function Home() {
  const heroPar = par.home;

  useEffect(()=>{
    window.document.title = 'Unix Studio';
  }, []);

  return (
    <div className="main-body-bg main-page">
      <div className="main-grafic-bg">
        <HeroSec par={heroPar} />
        <MainAboutSec />
        <MainVideoSec />
        <MainWitnessSec />
        <MainAboutCeoSec />
        <MainPastProjectsSec />
        <MainWorthySec />
        <MainOurClientSec />
      </div>
    </div>
  )
}

export default Home;

