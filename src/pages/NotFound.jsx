import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/scss/style.scss";
import "../assets/scss/error404.scss";
import Lottie from "lottie-react";
import animationErr from '../assets/other/404error.json';
import pageTitle from '../data/pagesTitles.json';
import { Helmet } from "react-helmet-async";
// import { lazy, Suspense } from 'react';
// const Lottie = lazy(() => import("lottie-react"));


// const renderLoader = () => <p>Loading</p>;


function NotFound() {
  
  // useEffect(()=>{
  //   window.document.title = 'Unix Not Found';
  // }, []);

  return (
    <>
      <Helmet>
        <title>{pageTitle.notFound}</title>
        <meta name="description" content="Oops! It seems you've ventured into uncharted digital territory uses a friendly tone to acknowledge the situation. &#9742; +18880007999" />
        <meta name="robots" content="all" />
        <meta name="revisit-after" content="1 days" />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Unixstudio" />
        <meta property="og:description" content="Oops! It seems you've ventured into uncharted digital territory uses a friendly tone to acknowledge the situation." />
        <meta property="og:url" content="https://torandori.github.io/My_Project_Unix/" />
        <meta property="og:site_name" content=" Unixstudio " />
        <meta property="og:image" content="https://torandori.github.io/My_Project_Unix/assets/logo-91daf828.svg" />
        <meta name="twitter:title" content="Unixstudio" />
        <meta name="twitter:description" content="Oops! It seems you've ventured into uncharted digital territory uses a friendly tone to acknowledge the situation." />
        <meta name="twitter:image" content="https://torandori.github.io/My_Project_Unix/assets/logo-91daf828.svg" />
        {/* <meta name="description" content="This is the meta description for this specific page." /> */}
      </Helmet>
      {/* <Suspense fallback={renderLoader()}> */}
        <div className="error404Page">
          <div className="container">
            <div className="anim-wrap">
              <Lottie animationData={animationErr} />
            </div>
            <div className="under-anim">
              <h1 className="panchang err-title">Page is not found</h1>
              <Link to="/" title="Move to home page">Back to home</Link>
            </div>
          </div>
        </div>
      {/* </Suspense> */}
    </>
  )
}
export default NotFound;