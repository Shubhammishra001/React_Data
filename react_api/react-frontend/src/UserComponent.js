import React, { useState, useEffect } from 'react';
import UserService from './UserService';
//import { getUsers, addUser, deleteUser, editUser } from './UserService';

function UserComponent() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ firstName: '', lastName: '', email: '' });
  const [editUser, setEditUser] = useState({ id: null, firstName: '', lastName: '', email: '' });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    UserService.getUsers()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  };

  const handleAddUser = () => {
    UserService.addUser(newUser)
      .then((response) => {
        console.log('User added:', response.data);
        setUsers((prevUsers) => [...prevUsers, response.data]);
        setNewUser({ firstName: '', lastName: '', email: '' });
      })
      .catch((error) => {
        console.error('Error adding user:', error);
      });
  };

  const handleSetEditUser = (user) => {
    setEditUser(user);
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditUser((prevEditUser) => ({ ...prevEditUser, [name]: value }));
  };

  const handleEditUser = () => {
    const { id, firstName, lastName, email } = editUser;
    UserService.editUser(id, { firstName, lastName, email })
      .then((response) => {
        console.log('User updated:', response.data);
        setUsers((prevUsers) =>
          prevUsers.map((user) => (user.id === id ? response.data : user))
        );
        setEditUser({ id: null, firstName: '', lastName: '', email: '' });
      })
      .catch((error) => {
        console.error('Error updating user:', error);
      });
  };

  const handleDeleteUser = (id) => {
    UserService.deleteUser(id)
      .then(() => {
        console.log('User deleted:', id);
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
      });
  };

  return (
    <div>
      <h1 className="text-center">Users List</h1>
      <div className="form-group">
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={newUser.firstName}
          onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={newUser.lastName}
          onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>

      {editUser.id && (
        <div className="form-group">
          <input
            type="text"
            placeholder="Edit First Name"
            name="firstName"
            value={editUser.firstName}
            onChange={handleEditInputChange}
          />
          <input
            type="text"
            placeholder="Edit Last Name"
            name="lastName"
            value={editUser.lastName}
            onChange={handleEditInputChange}
          />
          <input
            type="text"
            placeholder="Edit Email"
            name="email"
            value={editUser.email}
            onChange={handleEditInputChange}
          />
          <button onClick={handleEditUser}>Update User</button>
        </div>
      )}

      <table className="table table-striped">
        <thead>
          <tr>
            <th>User Id</th>
            <th>User First Name</th>
            <th>User Last Name</th>
            <th>User Email Id</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleSetEditUser(user)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserComponent;
