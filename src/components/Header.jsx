function Header() {
  return (
    <header className="site-header">
      <div className="topbar wrap">
        <a className="brand" href="/">Study Link Lagos</a>
        <nav aria-label="Main">
          <ul className="nav-list">
            <li><a href="#filters">Filters</a></li>
            <li><a href="#results">Spots</a></li>
          </ul>
        </nav>
      </div>

      <div className="hero">
        <div className="hero-inner wrap">
          <h1>Find a place to focus.</h1>
          <p className="tagline">
            Study spots across Lagos, compared on Wi-Fi, power, noise and price.
          </p>
          <a className="btn btn-light" href="#filters">Find a spot</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
