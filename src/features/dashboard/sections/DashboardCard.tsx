interface DashboardCardProps {
  title: string;
  amount: number;
  color: string;
  icon: React.ReactNode;
}

const DashboardCard = ({ title, amount, color, icon }: DashboardCardProps) => {
  return (
    <article className="px-[17px] py-[20px] lg:py-[40px] lg:px-[15px] bg-white rounded-[20px] lg:rounded-none lg:flex-1">
      <div className="flex gap-[21.1px] justify-between">
        <h1 className="text-[#171725] font-[600] text-[15px] tracking-[0.1px] w-[76.903px] lg:w-auto">
          {title}
        </h1>
        <div
          className={`flex items-center justify-center h-[50px] w-[50px] bg-[${color}] rounded-full`}
        >
          {icon}
        </div>
      </div>
      <h1 className="text-[#171725] font-[600] lg:font-[700] text-[22px] lg:text-[30px] tracking-[0.1px] mt-[14px]">
        N{amount.toLocaleString()}
      </h1>
    </article>
  );
};

export default DashboardCard;
