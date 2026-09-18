import { useState } from "react";

function AddForm({ onAddStudent }) {

  function getRandom() {
    return Math.round(Math.random() * 1000);
  }

  const [id, setId] = useState(getRandom());
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setId(getRandom());
    const student = { id: id, name: name };
    onAddStudent(student);
    console.log(JSON.stringify(student))
    localStorage.setItem(id.toString(), JSON.stringify(student));
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>Enter name: </label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <button>Add</button>
      </form>
    </div>
  )
}

export default AddForm;