"use client";
import React from "react";
import { Button } from "antd";
import Link from "next/link";
import StatusTable from "@/app/components/shared/StatusTable";
const FacebookOverview = () => {
  return (
    <div className="container mx-auto p-4">
      <h4 className=" text-start text-black text-4xl font-semibold">
        Facebook Buddy
      </h4>
      <div className="flex gap-4   mt-8">
        <div className="mt-8">
          <Button type="primary" className="px-8 py-5 rounded-full text-lg">
            <Link href="ad">Start Advertising</Link>
          </Button>
        </div>
      </div>
      <h4 className=" text-center text-black text-4xl font-semibold my-12">
        Your Facebook Campaigns
      </h4>
      <div className="mt-12">
        <StatusTable />
      </div>
    </div>
  );
};

export default FacebookOverview;
