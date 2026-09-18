import { useState } from "react";

function SearchForm({ onAddStudent }) {

  const [key, setKey] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const student = JSON.parse(localStorage.getItem(key));
    onAddStudent(student);
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>Enter key: </label>
        <input type="text" value={key} onChange={e => setKey(e.target.value)} />
        <button>Search</button>
      </form>
    </div>
  )
}

export default SearchForm;