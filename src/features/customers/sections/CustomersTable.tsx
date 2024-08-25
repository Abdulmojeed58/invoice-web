import { Table } from "@/components";
import React from "react";
import { CUSTOMERS_MOCK_DATA } from "../data/customers_mock_data";
import CustomersTableRow from "./CustomersTableRow";

type ITableHead = {
  id: string;
  title: string;
  align?: string;
  clasName?: string;
}[];

const TABLE_HEAD_DATA: ITableHead = [
  { id: "name", title: "Customer name", align: "!text-left" },
  { id: "email", title: "Email", align: "!text-center" },
  { id: "location", title: "Location", align: "!text-center" },
  { id: "column 4", title: "", align: "" },
];

const CustomerTable = () => {
  return (
    <Table className="!min-w-[700.152px]">
      <Table.TableHead>
        {TABLE_HEAD_DATA.map((item) => (
          <Table.TableHeadCell key={item.id} className={item.align}>
            <p className="text-base text-greyPrimary font-medium">
              {item.title}
            </p>
          </Table.TableHeadCell>
        ))}
      </Table.TableHead>
      <Table.TableBody>
        {CUSTOMERS_MOCK_DATA.map((item) => (
          <CustomersTableRow key={item.id} rows={item} />
        ))}
      </Table.TableBody>
    </Table>
  );
};

export default CustomerTable;
