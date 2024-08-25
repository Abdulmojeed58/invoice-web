import { MoreActionsButton, Table } from "@/components";
import { PATHS } from "@/routes/path";
import Image from "next/image";
import { useRouter } from "next/router";

interface CustomersTableRowProps {
  rows: {
    id: string;
    name: string;
    email: string;
    location: string;
  };
}

const CustomersTableRow: React.FC<CustomersTableRowProps> = ({ rows }) => {
  const router = useRouter();
  const { id, name, email, location } = rows;

  const triggerEditCustomer = (id: string) => {
    router.push(PATHS.customers.edit(id));
  };

  const triggerViewCustomer = (id: string) => {
    router.push(PATHS.customers.view(id));
  };
  return (
    <Table.TableRow>
      <Table.TableRowCell className="!text-left flex items-center gap-4 mt-3">
        <span className="w-[40px] h-[40px] rounded-full overflow-hidden block">
          <Image
            src="https://www.londondentalsmiles.co.uk/wp-content/uploads/2017/06/person-dummy.jpg"
            alt=""
            width={40}
            height={40}
          />
        </span>
        {name}
      </Table.TableRowCell>
      <Table.TableRowCell>{email}</Table.TableRowCell>
      <Table.TableRowCell>{location}</Table.TableRowCell>
      <Table.TableRowCell>
        <MoreActionsButton
          actions={[
            {
              label: "view",
              onClick: () => {
                triggerViewCustomer(id);
              },
            },
            {
              label: "Edit",
              onClick: () => {
                triggerEditCustomer(id);
              },
            },
          ]}
        />
      </Table.TableRowCell>
    </Table.TableRow>
  );
};

export default CustomersTableRow;
