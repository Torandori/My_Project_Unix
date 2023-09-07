import { lazy, Suspense } from 'react';
const ContactForm  = lazy(() => import('./ContactForm'));
// import ContactForm from './ContactForm';

function ContContactsSec() {
  return (
    <div id="contacts-sec">
      <div className="container">
      <Suspense fallback={'loading'}>
        <ContactForm />
      </Suspense>
      </div>
    </div>
  )
}
export default ContContactsSec;