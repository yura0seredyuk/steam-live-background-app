import React, { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/users').then(res => {
      if (res.ok) {
        return res.json();
      }
    }).then(jsonRes => setUsers(jsonRes.usersList));
  }, []);

  return (
    <div>
      <ul>
        {users.map((user, i) => <li key={i}>{user.name}</li>)}
      </ul>
    </div>
  )
}

export default Users;
