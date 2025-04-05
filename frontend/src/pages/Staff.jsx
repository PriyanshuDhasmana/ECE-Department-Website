// frontend/src/pages/Staff.jsx

import React, { useEffect, useState } from "react";

const Staff = () => {
  const [staffList, setStaffList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/staff");
        const data = await res.json();
        setStaffList(data);
      } catch (err) {
        setError("Failed to fetch staff data.");
      } finally {
        setLoading(false);
      }
    };

    fetchStaff();
  }, []);

  if (loading) return <p>Loading staff...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>Our Esteemed Staff</h2>
      <ul>
        {staffList.map((staff) => (
          <li key={staff._id}>
            <strong>{staff.name}</strong> - {staff.position} <br />
            {staff.email}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Staff;
