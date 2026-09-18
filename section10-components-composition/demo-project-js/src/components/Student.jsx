
function Student({ student }) {
  
  return (
    <div className="student">
      <p>{student.id}</p>
      <p>{student.name}</p>
    </div>
  )
}

export default Student;