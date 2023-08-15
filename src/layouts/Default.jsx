import MobBar from "../components/MobBar"
import SiteHeader from "../components/SiteHeader"
import SiteFooter from "../components/SiteFooter"
import { Outlet } from "react-router-dom"
// import { Suspense } from "react"

function Default(){

  return (
    <>
      <div className="page-wrap">
        <MobBar />
        <SiteHeader />
          <main>
            {/* <Suspense fallback={<p>Loading..</p>}> */}
              <Outlet />  
            {/* </Suspense>  */}
          </main>
        <SiteFooter />
      </div>
    </>
  )
}
export default Default;