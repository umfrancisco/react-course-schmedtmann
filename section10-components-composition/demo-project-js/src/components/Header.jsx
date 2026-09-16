function Header({ title }) {
  return (
    <div className="header">
      <div className="header-container">
        <h1>{title}</h1>
        <div>
          <a href="#" className="link">
            Explore
          </a>
          <a href="#" className="link">
            Share
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
