import React, { useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [dept, setDept] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAddOrUpdate = () => {
    if (!name || !dept) return alert("Enter all fields!");

    if (editIndex !== null) {
      // Update existing student
      const updated = [...students];
      updated[editIndex] = { name, dept };
      setStudents(updated);
      setEditIndex(null);
    } else {
      // Add new student
      setStudents([...students, { name, dept }]);
    }
    setName("");
    setDept("");
  };

  const handleEdit = (index) => {
    setName(students[index].name);
    setDept(students[index].dept);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = students.filter((_, i) => i !== index);
    setStudents(updated);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>🎓 Student Record Management</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />{" "}
      <input
        type="text"
        placeholder="Enter Department"
        value={dept}
        onChange={(e) => setDept(e.target.value)}
      />{" "}
      <button onClick={handleAddOrUpdate}>
        {editIndex !== null ? "Update" : "Add"}
      </button>

      <ul style={{ listStyle: "none", marginTop: "20px" }}>
        {students.map((s, index) => (
          <li key={index}>
            {s.name} — {s.dept}{" "}
            <button onClick={() => handleEdit(index)}>Edit</button>{" "}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
