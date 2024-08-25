import Dashboard from "@/features/dashboard/sections/Dashboard";
import HeaderBreadcrumbs from "@/components/HeaderBreadcrumbs";
import React from "react";

const DashboardPage = () => {
  return (
    <HeaderBreadcrumbs title="Dashboard">
      <Dashboard />
    </HeaderBreadcrumbs>
  );
};

export default DashboardPage;
