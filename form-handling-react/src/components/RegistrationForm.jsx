import { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.username || !formData.email || !formData.password) {
      setError("All fields are required!");
      return;
    }

    setError("");
    console.log("Form Submitted:", formData);

    // Simulate API call
    alert("User registered successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border rounded w-80 mx-auto mt-6"
    >
      <h2 className="text-lg font-bold mb-3">Register (Controlled)</h2>

      {error && <p className="text-red-500 mb-2">{error}</p>}

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 w-full rounded"
      >
        Register
      </button>
    </form>
  );
}
