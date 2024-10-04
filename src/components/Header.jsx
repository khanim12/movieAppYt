import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">Izlenecekler</Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/watched">Izlenenler</Link>
            </li>
            <li>
              <Link to="/add" className="btn">
                <i className="fas fa-plus"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
