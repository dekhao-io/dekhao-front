"use client";

import StatusTable from "@/components/shared/StatusTable";
import { Button } from "antd";
import Link from "next/link";

const UserDashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h4 className=" text-start text-black text-4xl font-semibold">
        Our system 3X accurate now for you, Selefe!
      </h4>
      <div className="flex gap-4   mt-8">
        <div className="mt-8">
          <Button type="primary" className="px-8 py-5 rounded-full text-lg">
            <Link href="ad">Start Advertising</Link>
          </Button>
        </div>
        <div className="mt-8">
          <Button type="primary" className="px-8 py-5 rounded-full text-lg">
            <Link href="ad">Setup a marketing campaign</Link>
          </Button>
        </div>
      </div>
      <div className="mt-12">
        <StatusTable />
      </div>
    </div>
  );
};

export default UserDashboard;
