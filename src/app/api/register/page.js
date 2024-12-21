"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    industry: "",
    company: "",
    role: "user", // Default role is "user"
  });
  const [message, setMessage] = useState("");

  // Password Regex
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check password strength
    if (!passwordRegex.test(formData.password)) {
      setMessage(
        "Password must be at least 8 characters long, include uppercase, lowercase, number, and a special character."
      );
      return;
    }

    // Simulate storing users in localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const isExistingUser = users.some((user) => user.email === formData.email);

    if (isExistingUser) {
      setMessage("Email already registered!");
    } else {
      users.push(formData);
      localStorage.setItem("users", JSON.stringify(users));
      setMessage("User registered successfully!");
    }
  };

  return (
    <div className="container mx-auto">
      <Link href="/">
        {" "}
        <Image
          className="m-auto"
          src={logo}
          width={56}
          height={122}
          alt="Logo of the company"
        />{" "}
      </Link>
      <form
        onSubmit={handleSubmit}
        className="p-6 rounded shadow-md w-full max-w-md mx-auto bg-white"
      >
        <h2 className="text-lg font-medium mb-4 text-center">Register</h2>

        {/* User Fields */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
          <p className="text-sm text-gray-500 mt-1">
            Must be at least 8 characters, include uppercase, lowercase, number,
            and special character.
          </p>
        </div>

        {/* Role Selection */}
        <div className="mb-4">
          <label className="block text-sm  font-medium mb-2" htmlFor="role">
            Role
          </label>
          <select
            id="role"
            name="role"
            onChange={handleChange}
            value={formData.role}
            className="w-full px-4 py-2 border  rounded-lg"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="manager">Participant</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-lg"
        >
          Submit
        </button>

        {message && (
          <p className="mt-4 text-center text-sm text-red-500">{message}</p>
        )}
      </form>
    </div>
  );
};

export default Register;
