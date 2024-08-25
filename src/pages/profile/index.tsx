import HeaderBreadcrumbs from "@/components/HeaderBreadcrumbs";
import { Profile } from "@/features/profile/sections";
import React from "react";

const ProfilePage = () => {
  return (
    <HeaderBreadcrumbs title="Profile">
      <Profile />
    </HeaderBreadcrumbs>
  );
};

export default ProfilePage;
