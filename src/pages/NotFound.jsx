// import { lazy, Suspense } from 'react';
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/scss/style.scss"
import "../assets/scss/error404.scss"
// const Lottie = lazy(() => import("lottie-react"));
import Lottie from "lottie-react"
import animationErr from '../assets/other/404error.json'


// const renderLoader = () => <p>Loading</p>;


function NotFound() {
  
  useEffect(()=>{
    window.document.title = 'Unix Not Found';
  }, []);

  return (
    // <Suspense fallback={renderLoader()}>
      <div className="error404Page">
        <div className="container">
          <div className="anim-wrap">
            <Lottie animationData={animationErr} />
          </div>npm
          <div className="under-anim">
            <h1 className="panchang err-title">Page is not found</h1>
            <Link to="/">Back to home</Link>
          </div>
        </div>
      </div>
    // </Suspense>
  )
}
export default NotFound;