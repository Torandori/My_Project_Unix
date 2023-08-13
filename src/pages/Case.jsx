import { useEffect } from 'react';
import HeroSec from '../components/HeroSec';
import '../assets/scss/case.scss'
import CasesSec from '../components/CasesSec';
import par from '../data/heroData.json';

function Case() {
  const heroPar = par.cases;

  useEffect(()=>{
    window.document.title = 'Unix Cases';
  }, []);

  return (
    <div id="case-page">
      <HeroSec par={heroPar} />
      <CasesSec />
    </div>
  )
}

export default Case;