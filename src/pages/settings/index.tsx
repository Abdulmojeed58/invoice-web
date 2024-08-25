import HeaderBreadcrumbs from "@/components/HeaderBreadcrumbs";
import { Settings } from "@/features/settings/sections";
import React from "react";

const SettingsPage = () => {
  return (
    <HeaderBreadcrumbs title="Settings">
      <Settings />
    </HeaderBreadcrumbs>
  );
};

export default SettingsPage;
