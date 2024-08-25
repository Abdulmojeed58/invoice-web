import React, { useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import DashboardTableRow from "./DashboardTableRow";
import { invoice } from "../data/mockInvoiceData";
import DashboardCard from "./DashboardCard";
import { OpenIcon, Table } from "@/components";

type ITableHead = {
  id: string;
  title: string;
  align?: string;
  clasName?: string;
}[];

const TABLE_HEAD_DATA: ITableHead = [
  {
    id: "column 1",
    title: "",
    align: "center",
    clasName: "rounded-tl-[14px] rounded-bl-[2px]",
  },
  { id: "transactionId", title: "Transaction ID", align: "center" },
  { id: "date", title: "Date", align: "center" },
  { id: "from", title: "From", align: "center" },
  { id: "amount", title: "Amount", align: "center" },
  {
    id: "status",
    title: "Status",
    align: "center",
    clasName: "rounded-tr-[14px] rounded-br-[2px]",
  },
];

const analyticsData = [
  {
    id: "invoiceAmount",
    title: "Invoice Amount",
    amount: 30000,
    color: "#50fe8d5b",
    icon: <OpenIcon />,
  },
  {
    id: "paymentReceived",
    title: "Payment Received",
    amount: 30000,
    color: "#50fe8d5b",
    icon: <OpenIcon />,
  },
  {
    id: "overdueAmount",
    title: "Overdue Amount",
    amount: 30000,
    color: "#50fe8d5b",
    icon: <OpenIcon />,
  },
  {
    id: "customers",
    title: "No. of Customers",
    amount: 30000,
    color: "#50fe8d5b",
    icon: <OpenIcon />,
  },
];

const Dashboard = () => {
  // const { data: session } = useSession();

  // useEffect(() => {
  //   // signOut()
  //   console.log(session);
  // }, []);

  return (
    <section className="pt-[29px] px-[10px] lg:px-[40px]">
      <h2 className="text-[#171725] font-[600] text-[18px] ml-[5px]">
        Overview
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-[42px]">
        {analyticsData.map((item) => (
          <DashboardCard key={item.id} {...item} />
        ))}
      </div>
      <h2 className="text-[#2F2F2FCC] font-[700] text-[18px] my-[24px] lg:mt-[52px] lg:mb-[44px]">
        Invoice and Payment Summary
      </h2>
      <div className="overflow-x-auto">
        <Table>
          <Table.TableHead>
            {TABLE_HEAD_DATA?.map((item) => (
              <Table.TableHeadCell key={item.id} className={item.clasName}>
                {item.title}
              </Table.TableHeadCell>
            ))}
          </Table.TableHead>
          <Table.TableBody>
            <Table.TableRowCell className="h-[13.2px]" />
            {invoice.map((item) => (
              <DashboardTableRow key={item.id} rows={item} />
            ))}
          </Table.TableBody>
        </Table>
      </div>
    </section>
  );
};

export default Dashboard;
