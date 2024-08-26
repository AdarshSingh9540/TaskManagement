'use client';
import { Dashboard } from "@/components/Dashboard";
import { SidebarDemo } from "@/components/Sider";
import { useState } from "react";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
<div className="flex flex-row">
  <div><SidebarDemo/></div>
  <div><Dashboard/></div>
</div>
  );
}
