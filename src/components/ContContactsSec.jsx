import contacts from '../data/contContactsSecData.json'

function ContContactsSec() {
  return (
    <div id="contacts-sec">
      <div className="container">
        <form className="form" action="#" method="post">
          <div className="form-element">
            <input id="full-name" type="text" name="full-name" placeholder=" " required />
            <label htmlFor="full-name" className="fake">{contacts.name}</label>
          </div>
          <div className="form-element">
            <input id="tel" type="tel" name="tel" placeholder=" " required />
            <label htmlFor="tel" className="fake">{contacts.tel}</label>
          </div>
          <div className="form-element">
            <input id="email" type="email" name="email" placeholder=" " required />
            <label htmlFor="email" className="fake">{contacts.email}</label>
          </div>
          <div className="form-element last">
            <textarea name="more" id="more" placeholder=" " required></textarea>
            <label htmlFor="more" className="fake">{contacts.textArea}</label>
          </div>
          <button type="submit" className="btn form-btn" data-wow-delay=".5s"><span>{contacts.formBtnText}</span></button>
        </form>
      </div>
    </div>
  )
}
export default ContContactsSec;