// import React, { useEffect, useState } from "react";
// import "./Student.css";

// const StudentList=()=> {
//   const [students, setStudents] = useState(() => {
//     const savedStudents = localStorage.getItem("students");
//     return savedStudents ? JSON.parse(savedStudents) : [];
//   });

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     rollno: "",
//   });

//   const [editId, setEditId] = useState(null);

//   // Save to localStorage
//   useEffect(() => {
//     localStorage.setItem("students", JSON.stringify(students));
//   }, [students]);

//   // Input change
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Add / Update
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.name || !formData.email || !formData.rollno) {
//       alert("Please fill all fields");
//       return;
//     }

//     if (editId !== null) {
//       // UPDATE
//       setStudents(
//         students.map((student) =>
//           student.id === editId
//             ? {
//                 ...student,
//                 name: formData.name,
//                 email: formData.email,
//                 rollno: formData.rollno,
//               }
//             : student
//         )
//       );

//       setEditId(null);
//     } else {
//       // CREATE
//       const newStudent = {
//         id: Date.now(),
//         name: formData.name,
//         email: formData.email,
//        rollno: formData.rollno,
//       };

//       setStudents([...students, newStudent]);
//     }

//     // Clear form
//     setFormData({
//       name: "",
//       email: "",
//       rollno: "",
//     });
//   };

//   // Edit
//   const handleEdit = (student) => {
//     setFormData({
//       name: student.name,
//       email: student.email,
//       rollno: student.rollno,
//     });

//     setEditId(student.id);
//   };

//   // Delete
//   const handleDelete = (id) => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this student?"
//     );

//     if (confirmDelete) {
//       setStudents(
//         students.filter((student) => student.id !== id)
//       );
//     }
//   };

//   return (
//     <div className="student-container">

//       {/* FORM */}
//       <div className="student-form-box">

//         <h2>
//           {editId !== null ? "Edit Student" : "Add Student"}
//         </h2>

//         <form onSubmit={handleSubmit}>

//           <label>Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Enter name"
//           />

//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Enter email"
//           />

//           <label>Roll NO</label>
//           <input
//             type="number"
//             name="rollno"
//             value={formData.rollno}
//             onChange={handleChange}
//             placeholder="Enter roll no"
//           />

//           <button type="submit">
//             {editId !== null ? "Update Student" : "Add Student"}
//           </button>

//         </form>
//       </div>

//       {/* TABLE */}
//       <div className="student-table-box">

//         <h2>Student List</h2>

//         <table className="student-table">

//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Roll No</th>
//               <th>Action</th>
//             </tr>
//           </thead>

//           <tbody>

//             {students.map((student, index) => (
//               <tr key={student.id}>

//            <td>{index + 1}</td>

//                 <td>{student.name}</td>

//                 <td>{student.email}</td>

//                 <td>{student.rollno}</td>

//                 <td>
//                   <button
//                     className="edit-btn"
//                     onClick={() => handleEdit(student)}
//                   >
//                     Edit
//                </button>

//                   <button
//                     className="delete-btn"
//                     onClick={() => handleDelete(student.id)}
//                   >
//                     Delete
//                   </button>
//                 </td>

//               </tr>
//             ))}

//           </tbody>

//         </table>

//       </div>

//     </div>
//   );
// }

// export default StudentList;


import React, { useEffect, useState } from "react";
import "./Student.css";

function StudentList() {
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem("students");
    return savedStudents ? JSON.parse(savedStudents) : [];
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
   rollno: "",
  });

  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  // Save students to Local Storage
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  // Input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Open Add form
  const handleAddClick = () => {
    setEditId(null);

    setFormData({
      name: "",
      email: "",
      rollno: "",
    });

    setShowForm(true);
  };

  // Add / Update
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.rollno) {
    alert("Please fill all fields");
    return;
    }

    if (editId !== null) {
      // UPDATE
      setStudents(
        students.map((student) =>
          student.id === editId
            ? {
                ...student,
        name: formData.name,
        email: formData.email,
        rollno: formData.rollno,
              }
            : student
        )
      );
    } else {
      // CREATE
      const newStudent = {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
       rollno: formData.rollno,
      };

      setStudents([...students, newStudent]);
    }

    // Close popup
    setShowForm(false);

    // Clear form
    setFormData({
      name: "",
      email: "",
      rollno: "",
    });

    setEditId(null);
  };

  // Edit
  const handleEdit = (student) => {
    setFormData({
      name: student.name,
      email: student.email,
      rollno: student.rollno,
    });

    setEditId(student.id);
    setShowForm(true);
  };

  // Delete
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (confirmDelete) {
      setStudents(
        students.filter((student) => student.id !== id)
      );
    }
  };

  // Close popup
  const handleClose = () => {
    setShowForm(false);
    setEditId(null);

    setFormData({
      name: "",
      email: "",
      rollno: "",
    });
  };

  return (
    <div className="student-container">

      {/* HEADER */}

      <div className="student-header">
        <h2>Student List</h2>

        <button
          className="add-student-btn"
          onClick={handleAddClick}
        >
          + Add Student
        </button>
      </div>

      {/* POPUP FORM */}

      {showForm && (
        <div className="modal-overlay">

          <div className="student-form-box">

            <button
              className="close-btn"
              onClick={handleClose}
            >
              ×
            </button>

            <h2>
              {editId !== null
                ? "Edit Student"
                : "Add Student"}
            </h2>

            <form onSubmit={handleSubmit}>

              <label>Name</label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter name"
              />

              <label>Email</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
              />

              <label>Roll No</label>

              <input
                type="number"
                name="rollno"
                value={formData.rollno}
                onChange={handleChange}
                placeholder="Enter rollno"
              />

              <button
                type="submit"
                className="submit-btn"
              >
                {editId !== null
                  ? "Update Student"
                  : "Add Student"}
              </button>

            </form>

          </div>

        </div>
      )}

      {/* TABLE */}

      <div className="student-table-box">

        <table className="student-table">

          <thead>
            <tr>
              <th>Slno</th>
              <th>Name</th>
              <th>Email</th>
              <th>Roll No</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {students.map((student, index) => (
              <tr key={student.id}>

                <td>{index + 1}</td>

                <td>{student.name}</td>

                <td>{student.email}</td>

                <td>{student.rollno}</td>

                <td>

                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(student)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
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

    </div>
  );
}

export default StudentList;