import { IInvoice } from "../interface/invoiceType";

export const invoice: IInvoice[] = [
  {
    transactionId: "#12415346512",
    date: "2/5/2022 06:24 AM",
    from: "Chidinma",
    amount: "45,000",
    status: "canceled",
    id: "1",
  },
  {
    transactionId: "#12415346512",
    date: "2/5/2022 06:24 AM",
    from: "Abdulmojeed",
    amount: "45,000",
    status: "completed",
    id: "1",
  },
  {
    transactionId: "#12415346512",
    date: "2/5/2022 06:24 AM",
    from: "FaithFull",
    amount: "45,000",
    status: "failed",
    id: "1",
  },
  {
    transactionId: "#12415346512",
    date: "2/5/2022 06:24 AM",
    from: "Runner",
    amount: "45,000",
    status: "pending",
    id: "1",
  },
];
