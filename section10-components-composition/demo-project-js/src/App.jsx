import { useState } from "react";
import Header from "./components/Header";
import StudentList from "./components/StudentList";
import AddForm from "./components/AddForm";

function App() {
  const [data, setData] = useState(addExistingData());

  function handleAddStudent(student) {
    for (let s of data) {
      if (s.id === student.id) {
        return;
      }
    }
    setData([...data, student]);
  }

  function handleClearData() {
    setData([]);
  }

  function addExistingData() {
    let arr = [];
    Object.keys(localStorage).map(key => arr.push(JSON.parse(localStorage.getItem(key))));
    return arr;
  }


  return (
    <div>
      <Header title="Hello World" onClearData={handleClearData} />
      <AddForm onAddStudent={handleAddStudent} />
      <StudentList students={data} />
    </div>
  );
}

export default App;
