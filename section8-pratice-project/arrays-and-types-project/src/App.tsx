
const data: Student[] = [
  {
    id: 1,
    name: "Ann",
    courses: ["Python", "JavaScript"],
    score: 70
  },
  {
    id: 2,
    name: "Bob",
    courses: ["JavaScript", "Node.js"],
    score: 80
  },
  {
    id: 3,
    name: "Abe",
    courses: ["TypeScript", "Go"],
    score: 60
  }
]

type Student = {
  id: number
  name: string
  courses: string[]
  score: number
}

type Props = {
  student: Student
}

function Card({ student }: Props) {

  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.courses.map(course => course.concat(", "))}</td>
      <td>{student.score}</td>
    </tr>
  )
}

function App() {

  return (
    <div className="container">
      <h2>Table Students</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Courses</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {data.map(student => <Card key={student.id} student={student}/>)}
        </tbody>
      </table>
    </div>
  )
}

export default App
