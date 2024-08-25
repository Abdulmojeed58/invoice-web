import { ArrowIcon, Table } from "@/components";
import React from "react";
import { getStatusColor } from "../utils/getStatusColor";

interface DashboardTableRowProps {
  rows: {
    transactionId: string;
    date: string;
    from: string;
    amount: string;
    //   status: "canceled" | "completed" | "failed" | "pending";
    status: string;
  };
}

const DashboardTableRow: React.FC<DashboardTableRowProps> = ({ rows }) => {
  const { transactionId, date, from, amount, status } = rows;
  return (
    <Table.TableRow>
      <Table.TableRowCell
        className={`block rounded-[12px] p-[11px] w-[52.789px] mt-4 ml-auto bg-${getStatusColor(
          status
        )}`}
      >
        <ArrowIcon />
      </Table.TableRowCell>
      <Table.TableRowCell>{transactionId}</Table.TableRowCell>
      <Table.TableRowCell>{date}</Table.TableRowCell>
      <Table.TableRowCell>{from}</Table.TableRowCell>
      <Table.TableRowCell>{amount}</Table.TableRowCell>
      <Table.TableRowCell
        className={`text-${getStatusColor(status)} uppercase`}
      >
        {status}
      </Table.TableRowCell>
    </Table.TableRow>
  );
};

export default DashboardTableRow;
