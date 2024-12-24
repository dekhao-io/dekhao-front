"use client";
import { Provider } from "react-redux";
import UserMenu from "../components/shared/UserMenu";
import store from "@/redux/store";
export default function FacebookLayout({ children }) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Left-side Menu */}
      <UserMenu />
      {/* Page Content */}
      <main style={{ flex: 1, background: "#FDF9F9", padding: "20px" }}>
        <Provider store={store}>{children}</Provider>
      </main>
    </div>
  );
}
