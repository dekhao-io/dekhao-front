import React from "react";
import { Menu } from "antd";
import {
  CompressOutlined,
  DesktopOutlined,
  FrownOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from "@ant-design/icons";

const userMenu = () => {
  // Data for menu items
  const menuData = [
    { label: "Selfie", key: "1", icon: <FrownOutlined />, link: "/selfie" },
    {
      label: "Dashboard",
      key: "2",
      icon: <DesktopOutlined />,
      link: "/userDashboard",
    },
    {
      label: "Channels",
      key: "sub1",
      icon: <CompressOutlined />,
      link: "/userDashboard/channels",
      children: [
        {
          label: "Facebook Ads",
          key: "sub2",
          children: [
            {
              label: "Overview",
              key: "sub2-1",
              link: "/userDashboard/channels/facebook/overview",
            },
            {
              label: "Run Ads",
              key: "sub2-2",
              link: "/userDashboard/channels/facebook/run-ads",
            },
            {
              label: "Insights",
              key: "sub2-3",
              link: "/userDashboard/channels/facebook/insights",
            },
            {
              label: "A/B Testing",
              key: "sub2-4",
              link: "/userDashboard/channels/facebook/ab-testing",
            },
          ],
        },
        {
          label: "Instagram Ads",
          key: "4",
          link: "/userDashboard/channels/instagram",
        },
        {
          label: "TikTok Ads",
          key: "5",
          link: "/userDashboard/channels/tiktok",
        },
        {
          label: "LinkedIn Ads",
          key: "6",
          link: "/userDashboard/channels/linkedin",
        },
      ],
    },
    {
      label: "Support",
      key: "8",
      icon: <UsergroupAddOutlined />,
      link: "/userDashboard/support",
    },
    {
      label: "Profile",
      key: "9",
      icon: <UserOutlined />,
      link: "/userDashboard/profile",
    },
  ];

  // Recursive function to generate menu items
  const generateMenuItems = (data) =>
    data.map((item) => {
      if (item.children) {
        return {
          key: item.key,
          icon: item.icon,
          label: item.label,
          children: generateMenuItems(item.children), // Recursively process children
        };
      }
      return {
        key: item.key,
        icon: item.icon,
        label: (
          <a href={item.link} style={{ textDecoration: "none" }}>
            {item.label}
          </a>
        ), // Render as a link
      };
    });

  // Generate menu items from the data
  const items = generateMenuItems(menuData);

  return (
    <div>
      <Menu defaultSelectedKeys={["1"]} mode="inline" items={items} />
    </div>
  );
};

export default userMenu;
