import React, { useState, useEffect } from "react";

export default function AuthAdmin() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/u')
      .then(res => {
        if (res.ok) return res.json();
      })
      .then(jsonRes => setUsers(jsonRes))
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
