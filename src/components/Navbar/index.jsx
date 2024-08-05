import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <span className="logo">&lt;/&gt; Miran F.</span>
      <ul className="navbar__links">
        <li className="navbar__link-item">
          <a href="#">Home</a>
        </li>
        <li className="navbar__link-item">
          <a href="#">About</a>
        </li>
        <li className="navbar__link-item">
          <a href="#">My Work</a>
        </li>
        <li className="navbar__link-item">
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
