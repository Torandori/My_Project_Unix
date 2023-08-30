// import { lazy, Suspense } from 'react';
import { useEffect } from 'react';
import HeroSec from '../components/HeroSec';
// const CasesSec = lazy(() => import('../components/CasesSec'));
import CasesSec from '../components/CasesSec';
import par from '../data/heroData.json';
import '../assets/scss/case.scss';
import { Helmet } from 'react-helmet-async';
import pageTitle from '../data/pagesTitles.json';


// const renderLoader = () => <p>Loading</p>;

function Case() {
  const heroPar = par.cases;

  // useEffect(()=>{
  //   window.document.title = 'Unix Cases';
  // }, []);

  return (
    <>
      <Helmet>
        <title>{pageTitle.case}</title>
        <meta name="description" content="Explore our diverse portfolio of digital successes, ranging from captivating web designs to strategic marketing campaigns. &#9742; +18880007999" />
        <meta name="robots" content="all" />
        <meta name="revisit-after" content="1 days" />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Unixstudio" />
        <meta property="og:description" content="Explore our diverse portfolio of digital successes, ranging from captivating web designs to strategic marketing campaigns." />
        <meta property="og:url" content="https://torandori.github.io/My_Project_Unix/" />
        <meta property="og:site_name" content=" Unixstudio " />
        <meta property="og:image" content="https://torandori.github.io/My_Project_Unix/assets/logo-91daf828.svg" />
        <meta name="twitter:title" content="Unixstudio" />
        <meta name="twitter:description" content="Diverse portfolio of digital successes emphasizes the variety of projects your agency has undertaken." />
        <meta name="twitter:image" content="https://torandori.github.io/My_Project_Unix/assets/logo-91daf828.svg" />
        {/* <meta name="description" content="This is the meta description for this specific page." /> */}
      </Helmet>
      <div id="case-page">
        {/* <Suspense fallback={renderLoader()}> */}
          <HeroSec par={heroPar} />
          <CasesSec />
        {/* </Suspense> */}
      </div>
    </>
  )
}

export default Case;