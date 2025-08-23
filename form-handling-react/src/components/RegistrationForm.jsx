import { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formData;

  const [errors, setErrors] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) {
      setErrors("Username is required");
      return;
    }
    if (!email) {
      setErrors("Email is required");
      return;
    }
    if (!password) {
      setErrors("Password is required");
      return;
    }

    setErrors("");
    console.log("Form Submitted:", formData);
    alert("User registered successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border rounded w-80 mx-auto mt-6"
    >
      <h2 className="text-lg font-bold mb-3">Register (Controlled)</h2>

      {errors && <p className="text-red-500 mb-2">{errors}</p>}

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
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
