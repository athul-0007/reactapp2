import React, { useEffect, useState } from "react";
import "./User.css";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/Userlist.json")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="user-container">
      <h2>User List</h2>
<div className="user-grid">
  {users.map((user) => (
    <div className="user-card" key={user.id}>
      <img src={user.image} alt={user.name} />
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      <p>Course: {user.course}</p>
    </div>
  ))}
</div>
    </div>
  );
}

export default UserList;