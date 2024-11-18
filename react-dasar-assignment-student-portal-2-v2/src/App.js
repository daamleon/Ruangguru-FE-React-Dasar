import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";

const App = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/student")
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
        setLoading(false);
      });
  }, []);

  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <Table students={students} onDelete={deleteStudent} />
      )}
      <Form onAdd={addStudent} />
    </div>
  );
};

export default App;
