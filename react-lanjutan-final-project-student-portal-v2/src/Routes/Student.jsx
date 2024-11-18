// Student.jsx
import React, { useEffect, useState } from "react";
import {
  Select,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
} from "@chakra-ui/react";

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
      <Select
        data-testid="filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        mb={4}
        placeholder="Select Faculty"
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
      </Select>

      <TableContainer>
        <Table id="table-student" className="test-table">
          <Thead className="test-thead">
            <Tr className="test-tr">
              <Th className="test-th">No</Th>
              <Th className="test-th">Full Name</Th>
              <Th className="test-th">Faculty</Th>
              <Th className="test-th">Program Study</Th>
              <Th className="test-th">Option</Th>
            </Tr>
          </Thead>
          <Tbody className="test-tbody">
            {filteredStudents.map((student, index) => (
              <Tr key={student.id} className="student-data-row">
                <Td className="test-td">{index + 1}</Td>
                <Td className="test-td">{student.fullname}</Td>
                <Td className="test-td">{student.faculty}</Td>
                <Td className="test-td">{student.programStudy}</Td>
                <Td className="test-td">
                  <Button
                    colorScheme="red"
                    data-testid={`delete-${student.id}`}
                    onClick={() => handleDelete(student.id)}
                  >
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Student;
