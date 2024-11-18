import React, { useEffect, useState } from "react";

const Student = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetch("http://localhost:3001/student")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/student/${id}`, {
      method: "DELETE",
    }).then(() => {
      setStudents(students.filter((student) => student.id !== id));
    });
  };

  const filteredStudents = students.filter((student) => {
    if (filter === "All") return true;
    return student.faculty === filter;
  });

  if (loading) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      <select
        data-testid="filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
        <option value="Fakultas Ilmu Sosial dan Politik">
          Fakultas Ilmu Sosial dan Politik
        </option>
        <option value="Fakultas Teknik">Fakultas Teknik</option>
        <option value="Fakultas Teknologi Informasi dan Sains">
          Fakultas Teknologi Informasi dan Sains
        </option>
      </select>
      <table id="table-student">
        <thead>
          <tr>
            <th>No</th>
            <th>Full Name</th>
            <th>Faculty</th>
            <th>Program Study</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student, index) => (
            <tr key={student.id} className="student-data-row">
              <td>{index + 1}</td>
              <td>{student.fullname}</td>
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
    </div>
  );
};

export default Student;
