import React, { useEffect, useState } from 'react';

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://randomuser.me/api');
      const data = await response.json();
      console.log(data.results);

      setUsers((prevValue) => [...prevValue, data.results]);
      // console.log(users)
    };

    getData();
  }, [count]);
  // console.log(users[0])

  return (
    <div className="App">
      <h1>EASTVANTAGE ASSIGNMENT</h1>
      <button onClick={() => setCount(count + 1)}>Refresh</button>
      <h2>Start editing to see some magic happen!</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user[0].id.value}>
              <td>{user[0].name.title}</td>
              <td>{user[0].name.first}</td>
              <td>{user[0].name.last}</td>
              <td>{user[0].email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
