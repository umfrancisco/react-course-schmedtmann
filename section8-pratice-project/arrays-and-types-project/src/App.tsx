
const data: Student[] = [
  {
    id: 1,
    name: "Ann",
    courses: ["Python", "JavaScript"]
  },
  {
    id: 2,
    name: "Bob",
    courses: ["JavaScript", "Node.js"]
  },
  {
    id: 3,
    name: "Abe",
    courses: ["TypeScript", "Go"]
  }
]

type Student = {
  id: number
  name: string
  courses: string[]
}

type Props = {
  student: Student
}

function Card({ student }: Props) {

  return (
    <div>
      <p>{student.name}</p>
      <ul>
        {student.courses.map(
          course => <li>{course}</li>
        )}
      </ul>
    </div>
  )
}

function App() {

  return (
    <div>
      <h4>Students</h4>
      <div>
        {data.map(student => <Card student={student}/>)}
      </div>
    </div>
  )
}

export default App
