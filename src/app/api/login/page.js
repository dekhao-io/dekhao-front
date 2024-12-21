"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check credentials in localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === formData.email && u.password === formData.password
    );

    if (user) {
      setMessage(`Login Successful! Welcome ${user.role}.`);
      console.log("Logged-in User:", user);
      // Implement role-based redirect logic here
      if (user.role === "admin") {
        console.log("Redirect to Admin Dashboard");
      } else if (user.role === "manager") {
        console.log("Redirect to Manager Dashboard");
      } else {
        console.log("Redirect to User Dashboard");
      }
    } else {
      setMessage("Invalid email or password!");
    }
  };

  return (
    <div className="grid grid-cols-2">
      <div className="bg-blue-100 min-h-screen">
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
          <h2 className="text-lg font-medium mb-4 text-center">Login</h2>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              htmlFor="email"
            >
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
            <label
              className="block text-sm text-gray-700 font-medium mb-2"
              htmlFor="password"
            >
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
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            Login
          </button>
          {message && (
            <p className="mt-4 text-center text-sm text-red-500">{message}</p>
          )}
        </form>
      </div>
      <div className="bg-blue-500 ">
        <p className="bg-gray-200 text-gray-700 w-10 h-10 text-center mt-24 text-5xl p-2 mx-12 rounded-full">
          "
        </p>
        <p className="text-white text-4xl font-bold text-center mt-12">
          Run Campaign with most <br /> experience marketer
          <p className="mt-10">
            <span className="text-orange-500 "> with</span> dekhao.io
          </p>
        </p>
      </div>
    </div>
  );
};

export default Login;
