
type Student = {
  id: number
  name: string
  grade: {
    math: number
    english: number
  }
}

function getRandom() {
  return Math.floor(Math.random() * 100)
}

const data: Student[] = [
  {
    id: 1,
    name: "Abe",
    grade: {
      math: getRandom(),
      english: getRandom()
    }
  },
  {
    id: 2,
    name: "Bob",
    grade: {
      math: getRandom(),
      english: getRandom()
    }
  },
  {
    id: 3,
    name: "Ann",
    grade: {
      math: getRandom(),
      english: getRandom()
    }
  }
]

function App() {

  const mathGrades = data.map(student => student.grade.math)
  const englishGrades= data.map(student => student.grade.english)
  const mathAvg = handleMathAvg()
  const englishAvg = handleEnglishAvg()

  function handleMathAvg() {
    return mathGrades.reduce((acc, cur) => acc + cur, 0) / mathGrades.length
  }

  function handleEnglishAvg() {
    return englishGrades.reduce((acc, cur) => acc + cur, 0) / englishGrades.length
  }

  return (
    <div className="container">
        <div>
          {data.map(el => (
            <p key={el.id}>Name: {el.name}, Math: {el.grade.math}, English: {el.grade.english}</p>
          ))}
        </div>
        <div>
          <p>Math Average: {Math.round(mathAvg)}</p>
          <p>English Average: {Math.round(englishAvg)}</p>
        </div>
        <button onClick={() => window.location.reload()}>Reload page</button>
    </div>
  )
}

export default App
