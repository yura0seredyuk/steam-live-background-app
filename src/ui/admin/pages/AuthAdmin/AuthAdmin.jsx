import React, { useState, useEffect } from 'react';

export default function AuthAdmin() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/custom')
      .then(res => {
        if (res.ok) return res.json();
      })
      .then(jsonRes => setUsers(jsonRes))
      // eslint-disable-next-line no-console
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <p>Auth admin</p>
      {users.map(user => (
        <p key={user._id}>{user.name}</p>
      ))}
    </div>
  );
}
