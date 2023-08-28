// import { lazy, Suspense } from 'react';
import { useEffect } from 'react';
import HeroSec from '../components/HeroSec';
// const CasesSec = lazy(() => import('../components/CasesSec'));
import CasesSec from '../components/CasesSec';
import par from '../data/heroData.json';
import '../assets/scss/case.scss';

// const renderLoader = () => <p>Loading</p>;

function Case() {
  const heroPar = par.cases;

  useEffect(()=>{
    window.document.title = 'Unix Cases';
  }, []);

  return (
    <div id="case-page">
      {/* <Suspense fallback={renderLoader()}> */}
        <HeroSec par={heroPar} />
        <CasesSec />
      {/* </Suspense> */}
    </div>
  )
}

export default Case;