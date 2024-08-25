import { HTMLAttributes, ReactNode } from "react";

type TableProps<T = undefined> = {
  children?: ReactNode;
} & HTMLAttributes<T>;

export const Table = ({ className, children }: TableProps) => {
  return (
    <table className={`min-w-[1000.152px] w-full ${className}`}>
      {children}
      {/* <thead
        className="bg-white h-[76.984px] mb-[13.2px]"
        style={{ borderTopRightRadius: "14px" }}
      >
        <tr className="" style={{ borderRadius: "14px" }}>
          <th className="rounded-tl-[14px] rounded-bl-[2px]">
            <input type="checkbox" />
          </th>
          <th className="text-[18px] font-[600] leading-normal text-[#04091E] text-center">
            Transaction ID
          </th>
          <th className="text-[18px] font-[600] leading-normal text-[#04091E] text-center">
            Date
          </th>
          <th className="text-[18px] font-[600] leading-normal text-[#04091E] text-center">
            From
          </th>
          <th className="text-[18px] font-[600] leading-normal text-[#04091E] text-center">
            Amount
          </th>
          <th className="text-[18px] font-[600] leading-normal text-[#04091E] rounded-tr-[14px] rounded-br-[2px] text-center">
            Status
          </th>
        </tr>
      </thead> */}
      {/* <tbody style={{ marginTop: "40px" }}>
        <tr className="h-[13.2px]"></tr>
        {data.map((row, index) => (
          <tr
            key={index}
            className="bg-white h-[98.98px] border-b-[1.1px] border-[#F5F5F5]"
          >
            <td className="">
              <span
                className={`block rounded-[12px] p-[11px] w-[52.789px] ml-auto ${
                  row.status === "canceled"
                    ? "bg-primary"
                    : row.status === "completed"
                    ? "bg-darkGreen"
                    : row.status === "failed"
                    ? "bg-[#E3010F]"
                    : row.status === "pending"
                    ? "bg-black"
                    : ""
                }`}
              >
                <ArrowIcon />
              </span>
            </td>
            <td className="text-center text-[16px] font-[500] leading-normal text-[#04091E]">
              {row.transactionId}
            </td>
            <td className="text-center text-[16px] font-[500] leading-normal text-[#04091E]">
              {row.date}
            </td>
            <td className="text-center text-[16px] font-[500] leading-normal text-[#04091E]">
              {row.from}
            </td>
            <td className="text-center text-[16px] font-[600] leading-normal text-[#04091E]">
              {row.amount}
            </td>
            <td
              className={`uppercase text-center text-[16px] font-[600] leading-normal ${
                row.status === "canceled"
                  ? "text-primary"
                  : row.status === "completed"
                  ? "text-darkGreen"
                  : row.status === "failed"
                  ? "text-[#E3010F]"
                  : row.status === "pending"
                  ? "text-black"
                  : ""
              }`}
            >
              {row.status}
            </td>
          </tr>
        ))}
      </tbody> */}
    </table>
  );
};

const TableHead = ({ children }: TableProps) => {
  return (
    <thead
      className="bg-white h-[76.984px] mb-[13.2px]"
      style={{ borderTopRightRadius: "14px" }}
    >
      {children}
    </thead>
  );
};

const TableBody = ({ children }: TableProps) => {
  return <tbody style={{ marginTop: "40px" }}>{children}</tbody>;
};

const TableRow = ({ children }: TableProps) => {
  return (
    <tr className="bg-white h-[98.98px] border-b-[1.1px] border-[#F5F5F5]">
      {children}
    </tr>
  );
};

const TableHeadCell = ({ className, children }: TableProps) => {
  return (
    <th
      className={`text-[18px] font-[600] leading-normal text-[#04091E] text-center ${className}`}
    >
      {children}
    </th>
  );
};

const TableRowCell = ({ className, children }: TableProps) => {
  return (
    <td
      className={`text-center text-[16px] font-[500] leading-normal text-[#04091E] ${className}`}
    >
      {children}
    </td>
  );
};

Table.TableHead = TableHead;
Table.TableBody = TableBody;
Table.TableHeadCell = TableHeadCell;
Table.TableRow = TableRow;
Table.TableRowCell = TableRowCell;
