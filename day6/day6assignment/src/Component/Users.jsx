import React from 'react'

function Users({ users }) {
  return (
    <div>
      <h2>User List: {typeof(users)}</h2>
      {users.map(user => (
        <div key={user.id}>
          <p>ID: {user.id}</p>
          <p>Name: {user.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Users;

