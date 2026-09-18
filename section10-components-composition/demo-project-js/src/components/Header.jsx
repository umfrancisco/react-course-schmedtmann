function Header({ title, onClearData }) {

  function handleClearLocalStorage() {
    localStorage.clear();
    onClearData();
  }

  return (
    <div className="header">
      <div className="header-container">
        <h1>{title}</h1>
        <div>
          <a className="link">
            {localStorage.length} item(s)
          </a>
          <a className="link" onClick={handleClearLocalStorage}>
            Clear
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
