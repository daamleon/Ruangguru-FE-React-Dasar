import React, { useState } from "react";

const Form = ({ addStudent }) => {
  const [form, setForm] = useState({
    fullname: "",
    birthDate: "",
    gender: "Male",
    programStudy: "Ekonomi",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(form);
    setForm({
      fullname: "",
      birthDate: "",
      gender: "Male",
      programStudy: "Ekonomi",
    });
  };

  return (
    <form id="form-student" onSubmit={handleSubmit}>
      <label htmlFor="input-name">Fullname</label>
      <input
        id="input-name"
        type="text"
        name="fullname"
        value={form.fullname}
        onChange={handleChange}
      />

      <label htmlFor="input-date">Birth Date</label>
      <input
        id="input-date"
        type="date"
        name="birthDate"
        value={form.birthDate}
        onChange={handleChange}
      />

      <label htmlFor="input-gender">Gender</label>
      <select
        id="input-gender"
        name="gender"
        value={form.gender}
        onChange={handleChange}
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <label htmlFor="input-prody">Program Study</label>
      <select
        id="input-prody"
        name="programStudy"
        value={form.programStudy}
        onChange={handleChange}
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

      <input type="submit" value="Add student" />
    </form>
  );
};

export default Form;
