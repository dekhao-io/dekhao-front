"use client";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const UserDashboard = () => {
  return (
    <div>
      <h3 className="text-4xl font-semibold">
        Our system 3X accurate now for you, Selfie!
      </h3>
      <div className="flex gap-4">
        <div className="mt-8">
          <Button type="primary" className="px-8 py-5 rounded-full text-lg">
            <Link href="ad">Start Advertising</Link>
          </Button>
        </div>
        <div className="mt-8">
          <Button type="primary" className="px-8 py-5 rounded-full text-lg">
            <Link href="ad">Talk to a guid</Link>
          </Button>
        </div>
      </div>
      <p className="text-3xl">Your Campaign</p>
    </div>
  );
};

export default UserDashboard;
