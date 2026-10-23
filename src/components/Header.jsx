function Header() {
  return (
    <header className="site-header">
      <div className="wrap">
        <h1>Study Link Lagos</h1>
        <p className="tagline">Find a quiet place to study, with power and Wi-Fi.</p>
        <nav aria-label="Main">
          <ul className="nav-list">
            <li><a href="#results">Spots</a></li>
            <li><a href="#filters">Filters</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
