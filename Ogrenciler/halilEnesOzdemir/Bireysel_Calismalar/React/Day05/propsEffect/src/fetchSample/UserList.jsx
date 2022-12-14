import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setUsers(data);
          setLoading(false);
        }, 2000);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <>
      {loading == true ? (
        <span>Loading...</span>
      ) : (
        <table>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>User Name</td>
            <td>Email</td>
          </tr>
          {users &&
            users.map((item, key) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                </tr>
              );
            })}
        </table>
      )}
    </>
  );
}

export default UserList;
