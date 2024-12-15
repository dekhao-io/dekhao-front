"use client";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import Image from "next/image";
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    industry: "",
    company: "", // For company website URL
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    setMessage(data.message || data.error);
  };

  return (
    <div className="container mx-auto">
      <Image
        className=""
        src={logo}
        width={56}
        height={122}
        alt="Logo of the company"
      />
      <form
        onSubmit={handleSubmit}
        className="p-6 rounded shadow-md w-full max-w-md mx-auto bg-white"
      >
        <h2 className="text-lg font-medium mb-4 text-center">Register</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="name">
            Company Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Business Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
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
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="industry">
            Industry
          </label>
          <input
            type="text"
            id="industry"
            name="industry"
            placeholder="Industry"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="company">
            Company Website URL
          </label>
          <input
            type="url"
            id="company"
            name="company"
            placeholder="Company Website URL"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-300"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-lg"
        >
          Submit
        </button>
        <p>
          You already have an account?{" "}
          <Link className="text-blue-600 text-lg" href="/user/login">
            Login
          </Link>{" "}
        </p>

        {message && (
          <p className="mt-4 text-center text-sm text-red-500">{message}</p>
        )}
      </form>
    </div>
  );
};

export default Register;
