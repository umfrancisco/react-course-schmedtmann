import Student from "./Student";

function StudentList({ students }) {
  return (
    <div className="container">
      <ul className="student-list">
        {students.map((student) => <Student key={student.id} student={student} />)}
      </ul>
    </div>
  );
}

export default StudentList;
