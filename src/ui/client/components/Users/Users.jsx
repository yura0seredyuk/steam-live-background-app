import React, { useState, useEffect } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/users').then(res => {
      if (res.ok) {
        return res.json();
      }
    }).then(jsonRes => setUsers(jsonRes.usersList));
  }, []);

  return (
    <div>
      <ul>
        {users.map((user, i) => <li key={i}>{user.firstName}</li>)}
      </ul>
    </div>
  )
}

export default Users;
