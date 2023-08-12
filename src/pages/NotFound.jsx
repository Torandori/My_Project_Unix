import { Link } from "react-router-dom";
import "../assets/scss/style.scss"
import "../assets/scss/error404.scss"


function NotFound() {
  return (
    <div className="error404Page">
      <div className="container">
        <h1>error 404 page not founs</h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <Link to="/">Back to home</Link>
      </div>
    </div>
  )
}
export default NotFound;