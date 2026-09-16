import Header from "./components/Header";
import StudentList from "./components/StudentList";

const data = [
  { id: 1, name: "Ann", courses: ["Java", "Python"] },
  { id: 2, name: "Bob", courses: ["JavaScript"] },
  { id: 3, name: "Abe", courses: ["JavaScript", "TypeScript"] },
  { id: 4, name: "Ed", courses: ["Node.js", "Express.js"] },
  { id: 5, name: "Dave", courses: ["JavaScript"] },
];

function App() {
  return (
    <div>
      <Header title="Hello World" />
      <StudentList students={data} />
    </div>
  );
}

export default App;
