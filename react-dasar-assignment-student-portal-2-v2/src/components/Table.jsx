import React from "react";

const Table = ({ students, onDelete }) => {
  const handleDelete = (id) => {
    fetch(`http://localhost:3001/student/${id}`, {
      method: "DELETE",
    }).then(() => onDelete(id));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Fullname</th>
          <th>Birth Date</th>
          <th>Gender</th>
          <th>Faculty</th>
          <th>Program Study</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id} className="student-data-row">
            <td>{student.fullname}</td>
            <td>{student.birthDate}</td>
            <td>{student.gender}</td>
            <td>{student.faculty}</td>
            <td>{student.programStudy}</td>
            <td>
              <button
                data-testid={`delete-${student.id}`}
                onClick={() => handleDelete(student.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
