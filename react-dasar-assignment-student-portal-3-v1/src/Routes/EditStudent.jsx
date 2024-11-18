import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);

  const facultyMap = {
    Ekonomi: "Fakultas Ekonomi",
    Manajemen: "Fakultas Ekonomi",
    Akuntansi: "Fakultas Ekonomi",
    "Administrasi Publik": "Fakultas Ilmu Sosial dan Politik",
    "Administrasi Bisnis": "Fakultas Ilmu Sosial dan Politik",
    "Hubungan Internasional": "Fakultas Ilmu Sosial dan Politik",
    "Teknik Sipil": "Fakultas Teknik",
    Arsitektur: "Fakultas Teknik",
    Matematika: "Fakultas Teknologi Informasi dan Sains",
    Fisika: "Fakultas Teknologi Informasi dan Sains",
    Informatika: "Fakultas Teknologi Informasi dan Sains",
  };

  useEffect(() => {
    fetch(`http://localhost:3001/student/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Tambahkan log ini
        setFormData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedStudent = {
      ...formData,
      faculty: facultyMap[formData.programStudy],
    };

    fetch(`http://localhost:3001/student/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedStudent),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to update student");
        }
        return res.json();
      })
      .then(() => {
        navigate("/student");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  if (!formData) {
    return <p>Loading ...</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <img src={formData.profilePicture} alt="Profile" />
      <input
        type="text"
        name="fullname"
        value={formData.fullname}
        onChange={handleChange}
        data-testid="name"
      />
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        data-testid="address"
      />
      <input
        type="text"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        data-testid="phoneNumber"
      />
      <input
        type="date"
        name="birthDate"
        value={formData.birthDate}
        onChange={handleChange}
        data-testid="date"
      />
      <select
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        data-testid="gender"
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <select
        name="programStudy"
        value={formData.programStudy}
        onChange={handleChange}
        data-testid="prody"
      >
        <option value="Ekonomi">Ekonomi</option>
        <option value="Manajemen">Manajemen</option>
        <option value="Akuntansi">Akuntansi</option>
        <option value="Administrasi Publik">Administrasi Publik</option>
        <option value="Administrasi Bisnis">Administrasi Bisnis</option>
        <option value="Hubungan Internasional">Hubungan Internasional</option>
        <option value="Teknik Sipil">Teknik Sipil</option>
        <option value="Arsitektur">Arsitektur</option>
        <option value="Matematika">Matematika</option>
        <option value="Fisika">Fisika</option>
        <option value="Informatika">Informatika</option>
      </select>
      <button type="submit" data-testid="edit-btn">
        Edit Student
      </button>
    </form>
  );
};

export default EditStudent;
