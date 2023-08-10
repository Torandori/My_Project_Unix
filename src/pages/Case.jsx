import HeroSec from '../components/HeroSec';
import '../assets/scss/case.scss'
import CasesSec from '../components/CasesSec';
import par from '../data/heroData.json';

function Case() {
  const heroPar = par[6];

  return (
    <div id="case-page">
      <HeroSec par={heroPar} />
      <CasesSec />
    </div>
  )
}

export default Case;