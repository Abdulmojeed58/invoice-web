import HeaderBreadcrumbs from "@/components/HeaderBreadcrumbs";
import { Customers } from "@/features/customers/sections";

const SettingsPage = () => {
  return (
    <HeaderBreadcrumbs title="Customers">
      <Customers />
    </HeaderBreadcrumbs>
  );
};

export default SettingsPage;
