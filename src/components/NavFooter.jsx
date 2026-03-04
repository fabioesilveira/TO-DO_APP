import { Link } from "react-router-dom";

function NavFooter() {
  return (
    <footer className="footer">
      <Link to="/" className="footer-icon material-symbols-outlined">
        home
      </Link>

      <Link to="/register" className="footer-icon material-symbols-outlined">
        add
      </Link>
    </footer>
  );
}

export default NavFooter;