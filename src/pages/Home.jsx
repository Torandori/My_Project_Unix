import HeroSec from '../components/HeroSec';
import MainAboutCeoSec from '../components/MainAboutCeoSec';
import MainAboutSec from '../components/mainAboutSec';
import MainOurClientSec from '../components/MainOurClientSec';
import MainPastProjectsSec from '../components/MainPastProjectsSec';
import MainVideoSec from '../components/MainVideoSec';
import MainWitnessSec from '../components/MainWitnessSec';
import MainWorthySec from '../components/MainWorthySec';
import '../assets/scss/main.scss'

function Home() {
  return (
    <div className="main-body-bg main-page">
      <div className="main-grafic-bg">
        <HeroSec />
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

// return (
//   <>
//     <Header />
//     <div>
//       <a href="https://vitejs.dev" target="_blank">
//         <img src={viteLogo} className="logo" alt="Vite logo" />
//       </a>
//       <a href="https://react.dev" target="_blank">
//         <img src={reactLogo} className="logo react" alt="React logo" />
//       </a>
//     </div>
//     <h1>Vite + React</h1>
//     <div className="card">
//       <button onClick={() => setCount((count) => count + 1)}>
//         count is {count}
//       </button>
//       <p>
//         Edit <code>src/App.jsx</code> and save to test HMR
//       </p>
//     </div>
//     <p className="read-the-docs">
//       Click on the Vite and React logos to learn more
//     </p>
//   </>
// )
