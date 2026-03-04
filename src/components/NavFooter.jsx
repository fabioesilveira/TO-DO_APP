import { Link } from "react-router-dom";

function NavFooter() {
  return (
    <footer className="footer">
      <Link to="/" className="material-symbols-outlined footer-icon footer-home">
        home_filled
      </Link>

      <Link to="/register" className="footer-icon footer-add material-symbols-outlined">
        add
      </Link>
    </footer>
  );
}

export default NavFooter;