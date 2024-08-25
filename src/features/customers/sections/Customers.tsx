import { Button } from "@/components";
import React from "react";
import CustomerTable from "./CustomersTable";
import { useRouter } from "next/router";
import { PATHS } from "@/routes/path";
import CustomerFilter from "./CustomerFilter";

const Customers = () => {
  const router = useRouter();

  return (
    <main className="dashboardContainer">
      <div className="mt-[26px] flex justify-end mb-[20px] lg:mb-[60px]">
        <Button
          type="button"
          label="Add New Customer"
          variant="contained"
          onClick={() => router.push(PATHS.customers.create)}
        />
      </div>
      <CustomerFilter />
      <div className="overflow-x-auto">
        <CustomerTable />
      </div>
    </main>
  );
};

export default Customers;
