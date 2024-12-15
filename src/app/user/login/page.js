"use client";

import Image from "next/image";
import logo from "../../../assets/logo.png";
import { useState } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input, Space } from "antd";
const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    setMessage(data.token ? "Login Successful!" : data.error);
  };

  return (
    <div className="grid grid-cols-2">
      <div className="bg-blue-200 py-11">
        <Image
          className="m-auto "
          src={logo}
          width={56}
          height={122}
          alt="Logo of the company"
        />
        <div className="flex items-center justify-center min-h-screen ">
          <form className=" p-6 rounded shadow-md w-full max-w-md">
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
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-2"
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
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <div className="bg-blue-500 ">
        <div className="flex items-center justify-left ml-12 my-20">
          <p className=" bg-slate-200 w-10 h-10 rounded-full text-center text-5xl my-auto ">
            "
          </p>
        </div>
        <div className="flex items-center justify-center mt-10">
          <h4 className="text-5xl text-white font-semibold text-justify line-clamp-6">
            Run Campaign with most <br /> experience marketer
          </h4>
        </div>
        <div className="flex items-center justify-center mt-8">
          <h4 className="text-5xl text-white font-semibold text-justify line-clamp-6">
            <span className="text-orange-500">with</span> dekhao.io
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Login;
