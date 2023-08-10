import ArrowTop from "./svgComponents/arrowTop";

function ContactsFooter() {
  return(
    <footer id="footer-contacts">
      <div class="container">
        <div class="to-top-wrap">
          <a href="/" title="Scroll to top">
           <ArrowTop />
          </a>
            <div>Back to top</div>
        </div>
        <p class="copy">© 2023 Unix Studio. — Product Design Agency</p>
      </div>
    </footer>
  )
}
export default ContactsFooter;