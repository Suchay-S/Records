import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get(
          "http://localhost:8080/api/users"
      );

      setUsers(response.data);

    } catch (error) {
      console.error(error);
    }
  }

  async function addUser() {

    if (!name.trim()) return;

    try {

      await axios.post(
          "http://localhost:8080/api/users",
          {
            name: name
          }
      );

      setName("");

      fetchUsers();

    } catch (error) {
      console.error(error);
    }
  }

  return (
      <div style={{ padding: "20px" }}>

        <h1>Users</h1>

        <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />

        <button onClick={addUser}>
          Add User
        </button>

        <ul>
          {users.map((user) => (
              <li key={user.id}>
                {user.name}
              </li>
          ))}
        </ul>

      </div>
  );
}

export default App;