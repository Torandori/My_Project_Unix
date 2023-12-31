import MobBar from "../components/MobBar"
import SiteHeader from "../components/SiteHeader"
import SiteFooter from "../components/SiteFooter"
import { Outlet } from "react-router-dom"

function Default(){

  return (
    <>
      <div className="page-wrap">
        <MobBar />
        <SiteHeader />
          <main>
            <Outlet />  
          </main>
        <SiteFooter />
      </div>
    </>
  )
}
export default Default;