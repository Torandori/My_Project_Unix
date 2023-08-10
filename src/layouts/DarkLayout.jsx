import MobBar from "../components/MobBar"
import SiteHeader from "../components/SiteHeader"
import { Outlet } from "react-router-dom"
import ContactsFooter from "../components/contactsFooter"

function DarkLayout(){

  return (
    <>
      <div className="page-wrap">
        <MobBar />
        <SiteHeader />
          <main>
            <Outlet />
          </main>
        <ContactsFooter />
      </div>
    </>
  )
}
export default DarkLayout;