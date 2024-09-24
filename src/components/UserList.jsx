import { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  return (
    <div className="p-8 w-full">
      <h1 className="text-2xl font-semibold mb-6">User List</h1>
      <table className="min-w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-4">Name</th>
            <th className="p-4">Surname</th>
            <th className="p-4">Age</th>
            <th className="p-4">Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="border-b">
              <td className="p-4">{user.name}</td>
              <td className="p-4">{user.surname}</td>
              <td className="p-4">{user.age}</td>
              <td className="p-4">{user.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
