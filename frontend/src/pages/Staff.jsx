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
    <div style={{ padding: "20px" }}>
      <h2>Our Esteemed Staff</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {staffList.map((staff) => (
          <div
            key={staff._id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "15px",
              width: "250px",
            }}
          >
            {staff.image && (
              <img
                src={staff.image}
                alt={staff.name}
                style={{ width: "100%", borderRadius: "4px" }}
              />
            )}
            <h3>{staff.name}</h3>
            <p><strong>Position:</strong> {staff.position}</p>
            <p><strong>Email:</strong> {staff.email}</p>
            {staff.phone && <p><strong>Phone:</strong> {staff.phone}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Staff;
