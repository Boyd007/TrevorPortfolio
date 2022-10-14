import "./stylenav.scss";
import { Link } from "react-router-dom";
import Resume from "../../assets/TrevorBoydResume2022.pdf";
function Nav({ setpagename }) {
  return (
    <header>
      <h1>Trevor Boyd</h1>

      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/">About</Link>
          </li>
          <li className="nav__item">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="nav__item">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="nav__item">
            <a href={Resume} target="_blank" rel="noreferrer">
              Resume
            </a>
            {/* <Link to={Resume}>Resume</Link> */}
          </li>
          {/* <li className="nav__item">
            <Link to="/resources">Resources</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}
export default Nav;
