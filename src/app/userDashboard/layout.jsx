"use client";
import React, { useState } from "react";

import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import UserMenu from "@/components/shared/UserMenu";
import UserDashboard from "@/components/shared/UserDashboard";
// const { Header, Content, Footer, Sider } = Layout;

const userDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        className="bg-white"
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <UserMenu />
      </Sider>
      <Layout>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              backgroundColor: "#FDF9F9",
            }}
          >
            <UserDashboard />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default userDashboard;
