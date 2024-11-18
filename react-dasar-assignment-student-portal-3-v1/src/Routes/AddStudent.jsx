import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    profilePicture: "",
    address: "",
    phoneNumber: "",
    birthDate: "",
    gender: "",
    programStudy: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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

    const newStudent = {
      ...formData,
      faculty: facultyMap[formData.programStudy],
    };

    fetch("http://localhost:3001/student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStudent),
    }).then(() => {
      navigate("/student");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="fullname"
        placeholder="Full Name"
        value={formData.fullname}
        onChange={handleChange}
        data-testid="name"
      />
      <input
        type="text"
        name="profilePicture"
        placeholder="Profile Picture URL"
        value={formData.profilePicture}
        onChange={handleChange}
        data-testid="profilePicture"
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        data-testid="address"
      />
      <input
        type="text"
        name="phoneNumber"
        placeholder="Phone Number"
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
      <button type="submit" data-testid="add-btn">
        Add Student
      </button>
    </form>
  );
};

export default AddStudent;
