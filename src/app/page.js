"use client";

import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import brain from "../assets/brain.png";
import React from "react";
import Navbar from "./components/shared/Navbar";

const Home = () => {
  return (
    <div className="container mx-auto px-4 mb-10">
      <Navbar />
      <div>
        <div className="mt-8">
          <h1 className="text-6xl font-bold">
            We Make Your <br /> Campaign 2X Accurate
          </h1>
        </div>
        <div className="mt-8 text-2xl flex">
          <p>
            The more campaigns you run, the more accurate <br />
            our system becomes. Our system is gradually gaining <br />
            more experience than any other marketer in the world.
          </p>
          <Image
            src={brain}
            width={631}
            height={363}
            alt="Logo of the company"
          />
        </div>
        <div className="mt-8">
          <Button type="primary" className="px-8 py-5 rounded-full text-lg">
            <Link href="ad">Start Advertising</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
