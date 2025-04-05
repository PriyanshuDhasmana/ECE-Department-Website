import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      const token = localStorage.getItem("token");

      try {
        const res = await fetch("http://localhost:5000/api/dashboard", {
          headers: {
            Authorization: token,
          },
        });

        const data = await res.json();

        if (res.ok) {
          setMessage(data.message);
          setUser(data.user); // user object from backend
        } else {
          setMessage(data.message);
        }
      } catch (err) {
        console.error(err);
        setMessage("Error fetching dashboard.");
      }
    };

    fetchDashboard();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>{message}</p>
      {user && <p>User ID: {user.id}</p>}
    </div>
  );
};

export default Dashboard;
