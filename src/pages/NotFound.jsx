import { Link } from "react-router-dom";
import { lazy, Suspense } from 'react';
import "../assets/scss/style.scss";
import "../assets/scss/error404.scss";
const Lottie  = lazy(() => import('lottie-react'));
import animationErr from '../assets/other/404error.json';
import pageTitle from '../data/pagesTitles.json';
import { Helmet } from "react-helmet-async";
import Loader from "../components/Loader";

function NotFound() {

  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" data-rh="true" />

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
      </Helmet>
      <div className="error404Page">
        <div className="container">
          <div className="anim-wrap">
            <Suspense fallback={<Loader />}>
              <Lottie animationData={animationErr} />
            </Suspense>
          </div>
          <div className="under-anim">
            <h1 className="panchang err-title">Page is not found</h1>
            <Link to="/" title="Move to home page">Back to home</Link>
          </div>
        </div>
      </div>
    </>
  )
}
export default NotFound;