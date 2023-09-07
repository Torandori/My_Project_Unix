import { lazy, Suspense } from 'react';
const ContactForm  = lazy(() => import('./ContactForm'));
// import ContactForm from './ContactForm';
import Loader from "../components/Loader";

function ContContactsSec() {
  return (
    <div id="contacts-sec">
      <div className="container">
      <Suspense fallback={<Loader />}>
        <ContactForm />
      </Suspense>
      </div>
    </div>
  )
}
export default ContContactsSec;