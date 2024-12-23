// src/components/StatusTable.js
import React, { useState } from "react";
import { Button, Tag, Tooltip } from "antd";
import {
  PauseOutlined,
  EditOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";

const StatusTable = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Targeting Rampura",
      category: "Market Research",
      status: "Active",
      cost: "0.10/1,000 BDT",
      reach: "50K/500K",
    },
    {
      id: 2,
      title: "Exploring Banani",
      category: "Audience Insights",
      status: "Draft",
      cost: "0.08/800 BDT",
      reach: "20K/100K",
    },
    {
      id: 3,
      title: "Targeting Gulshan",
      category: "Performance Ads",
      status: "Pause",
      cost: "0.12/1,200 BDT",
      reach: "30K/300K",
    },
    {
      id: 4,
      title: "Local Ads in Mirpur",
      category: "Market Research",
      status: "Active",
      cost: "0.15/1,500 BDT",
      reach: "10K/50K",
    },
    {
      id: 5,
      title: "Targeting Dhanmondi",
      category: "Consumer Trends",
      status: "Draft",
      cost: "0.09/900 BDT",
      reach: "15K/150K",
    },
  ]);

  const [statusFilter, setStatusFilter] = useState("All"); // For filtering status

  // Function to update the status of an item
  const updateStatus = (id, newStatus) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
  };

  // Filter data based on status
  const filteredData =
    statusFilter === "All"
      ? data
      : data.filter((item) => item.status === statusFilter);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Filter Buttons */}
      <div className="flex space-x-4 mb-6">
        {["All", "Active", "Pause", "Draft"].map((filter) => (
          <Button
            key={filter}
            type={statusFilter === filter ? "primary" : "default"}
            onClick={() => setStatusFilter(filter)}
            className="rounded-full px-6"
          >
            {filter}
          </Button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow p-6">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="border-b text-left bg-gray-100">
              <th className="py-2 px-4">Title</th>
              <th className="py-2 px-4">Category</th>
              <th className="py-2 px-4">Reach</th>
              <th className="py-2 px-4">Cost</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4 font-semibold">{item.title}</td>
                <td className="py-2 px-4">{item.category}</td>
                <td className="py-2 px-4">{item.reach}</td>
                <td className="py-2 px-4">{item.cost}</td>
                <td className="py-2 px-4">
                  <Tag
                    color={
                      item.status === "Active"
                        ? "green"
                        : item.status === "Pause"
                        ? "orange"
                        : "blue"
                    }
                  >
                    {item.status}
                  </Tag>
                </td>
                <td className="py-2 px-4 text-center">
                  <div className="flex justify-center space-x-2">
                    {item.status !== "Active" && (
                      <Tooltip title="Activate">
                        <Button
                          type="primary"
                          shape="circle"
                          icon={<PlayCircleOutlined />}
                          onClick={() => updateStatus(item.id, "Active")}
                        />
                      </Tooltip>
                    )}
                    {item.status !== "Pause" && (
                      <Tooltip title="Pause">
                        <Button
                          type="default"
                          shape="circle"
                          icon={<PauseOutlined />}
                          onClick={() => updateStatus(item.id, "Pause")}
                        />
                      </Tooltip>
                    )}
                    {item.status !== "Draft" && (
                      <Tooltip title="Set as Draft">
                        <Button
                          type="default"
                          shape="circle"
                          icon={<EditOutlined />}
                          onClick={() => updateStatus(item.id, "Draft")}
                        />
                      </Tooltip>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredData.length === 0 && (
          <p className="text-center text-gray-500 mt-4">
            No records found for {statusFilter}.
          </p>
        )}
      </div>
    </div>
  );
};

export default StatusTable;
