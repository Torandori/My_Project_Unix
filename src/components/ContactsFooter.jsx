import ArrowTop from "./svgComponents/arrowTop";

function ContactsFooter() {
  function btnTopHandler() {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  return(
    <footer id="footer-contacts">
      <div class="container">
        <div class="to-top-wrap">
          <button type="button" onClick={btnTopHandler} title="Scroll to top" className="btn-to-top">
            <ArrowTop />
          </button>
            <div>Back to top</div>
        </div>
        <p class="copy">© 2023 Unix Studio. — Product Design Agency</p>
      </div>
    </footer>
  )
}
export default ContactsFooter;