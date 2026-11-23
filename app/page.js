"use client";

import { useEffect, useState } from "react";

function HomeView({ onNavigate }) {
  return (
    <main style={{ padding: "50px", textAlign: "center" }}>
      <h1>Welcome to KarobarApp</h1>
      <p>Manage your business with KarobarApp.</p>

      <div style={{ display: "flex", gap: "12px", justifyContent: "center", marginTop: "20px" }}>
        <button type="button" onClick={() => onNavigate("users")}>
          View Users
        </button>

        <button type="button" onClick={() => onNavigate("about")}>
          About Us
        </button>
      </div>
    </main>
  );
}

function UsersView({ onBack }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        console.error("Error:", err);
        setError("Failed to load users. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    getUsers();
  }, []);

  return (
    <main style={{ padding: "30px" }}>
      <button type="button" onClick={onBack}>
        ← Back to Home
      </button>
      <h1>Users List</h1>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <table border="1" cellPadding="12" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>City</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.address?.city}</td>
                <td>{user.company?.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}

function AboutView({ onBack }) {
  return (
    <main style={{ padding: "50px" }}>
      <button type="button" onClick={onBack}>
        ← Back to Home
      </button>
      <h1>About KarobarApp</h1>

      <p>KarobarApp is a Next.js learning project.</p>

      <h2>Technologies Used</h2>

      <ul>
        <li>Next.js</li>
        <li>React.js</li>
        <li>JavaScript</li>
        <li>Fetch API</li>
        <li>JSONPlaceholder API</li>
      </ul>
    </main>
  );
}

export default function KarobarApp() {
  const [view, setView] = useState("home");

  if (view === "users") {
    return <UsersView onBack={() => setView("home")} />;
  }

  if (view === "about") {
    return <AboutView onBack={() => setView("home")} />;
  }

  return <HomeView onNavigate={setView} />;
}