// import { lazy, Suspense } from 'react';
import { useEffect } from 'react';
// const HeroSec = lazy(() => import('../components/HeroSec'));
// const MainAboutCeoSec = lazy(() => import('../components/MainAboutCeoSec'))
// const MainAboutSec = lazy(() => import('../components/mainAboutSec'));
// const MainOurClientSec = lazy(() => import('../components/MainOurClientSec'));
// const MainPastProjectsSec = lazy(() => import('../components/MainPastProjectsSec'));
// const MainVideoSec =  lazy(() => import('../components/MainVideoSec'));
// const MainWitnessSec = lazy(() => import('../components/MainWitnessSec'));
// const MainWorthySec = lazy(() => import('../components/MainWorthySec'));
// const par = lazy(() => import('../data/heroData.json'));
import '../assets/scss/main.scss'
import HeroSec from '../components/HeroSec';
import MainAboutCeoSec from '../components/MainAboutCeoSec';
import MainAboutSec from '../components/mainAboutSec';
import MainOurClientSec from '../components/MainOurClientSec';
import MainPastProjectsSec from '../components/MainPastProjectsSec';
import MainVideoSec from '../components/MainVideoSec';
import MainWitnessSec from '../components/MainWitnessSec';
import MainWorthySec from '../components/MainWorthySec';
import par from '../data/heroData.json'

// const renderLoader = () => <p>Loading</p>;

function Home() {
  const heroPar = par.home;

  useEffect(()=>{
    window.document.title = 'Unix Studio';
  }, []);

  return (
    <div className="main-body-bg main-page">
      <div className="main-grafic-bg">
      {/* <Suspense fallback={renderLoader()}> */}
        <HeroSec par={heroPar} />
        <MainAboutSec />
        <MainVideoSec />
        <MainWitnessSec />
        <MainAboutCeoSec />
        <MainPastProjectsSec />
        <MainWorthySec />
        <MainOurClientSec />
      {/* </Suspense> */}
      </div>
    </div>
  )
}

export default Home;

