// frontend/src/pages/Staff.jsx

import React, { useEffect, useState } from "react";

const Staff = () => {
  const [staffList, setStaffList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isAdmin, setIsAdmin] = useState(false); // check role

  // Staff form states
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    department: "",
    email: "",
    phone: "",
    image: "",
  });

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

    const checkAdmin = () => {
      const token = localStorage.getItem("token");
      if (token) {
        const decoded = JSON.parse(atob(token.split(".")[1]));
        if (decoded && decoded.role === "admin") {
          setIsAdmin(true);
        }
      }
    };

    fetchStaff();
    checkAdmin();
  }, []);

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/staff", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStaffList((prev) => [...prev, data.staff]);
        setFormData({ name: "", position: "", department: "", email: "", phone: "", image: "" });
      } else {
        alert(data.message || "Failed to add staff.");
      }
    } catch (err) {
      alert("Error submitting staff data.");
    }
  };

  if (loading) return <p>Loading staff...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Our Esteemed Staff</h2>

      {isAdmin && (
        <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
          <h3>Add New Staff</h3>
          <input name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} required />
          <input name="position" placeholder="Position" value={formData.position} onChange={handleInputChange} required />
          <input name="department" placeholder="Department" value={formData.department} onChange={handleInputChange} />
          <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
          <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleInputChange} />
          <input name="image" placeholder="Image URL" value={formData.image} onChange={handleInputChange} />
          <button type="submit">Add Staff</button>
        </form>
      )}

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
