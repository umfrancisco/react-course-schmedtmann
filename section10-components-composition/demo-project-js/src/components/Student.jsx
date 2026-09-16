
function Student({ student }) {
  
  return (
    <div className="student">
      <p>{student.name}</p>
      <ul>
        {student.courses.map(course => <li>- {course}</li>)}
      </ul>
    </div>
  )
}

export default Student;