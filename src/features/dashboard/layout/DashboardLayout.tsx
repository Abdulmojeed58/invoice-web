import useNav from "@/zustance/navSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdDashboard } from "react-icons/md";
import { CloseSvg } from "../../auth/layout/Drawer";
import { PATHS } from "@/routes/path";
import { IoIosLogOut } from "react-icons/io";
import { signOut } from "next-auth/react";
import { useAuth } from "@/zustance/authSlice";

const sideLinks = [
  { name: "Dashboard", path: PATHS.dashboard.root, icon: <MdDashboard /> },
  { name: "Invoice", path: "/", icon: <InvoiceIcon /> },
  { name: "Analytics", path: "/", icon: <AnalyticsIcon /> },
  { name: "Profile", path: PATHS.profile.root, icon: <ProfileIcon /> },
  { name: "Customers", path: PATHS.customers.root, icon: <ProfileIcon /> },
  { name: "Settings", path: PATHS.settings.root, icon: <SettingsIcon /> },
];

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { isSidebar, setSidebar } = useNav();
  const { auth } = useAuth();

  const handleSignout = async () => {
    try {
      signOut();
      auth.user(null);
    } catch (error) {
      console.log("Signout Error", error);
    }
  };

  return (
    <section>
      <div id="modal"></div>
      <div className="lg:grid grid-cols-8 h-screen">
        <aside
          className={`${
            isSidebar ? "block" : "hidden lg:block"
          } lg:block fixed top-0 left-0 z-10 w-[400px] max-w-[90vw] h-full lg:w-auto lg:max-w-auto lg:static overflow-y-auto overflow-x-hidden bg-darkGreen px-[8px] pt-[204px]`}
        >
          <button
            onClick={() => setSidebar(false)}
            className="absolute right-5 top-5 lg:hidden"
          >
            <CloseSvg />
          </button>
          <ul className="grid gap-[12px]">
            {sideLinks.map((link, index) => (
              <li key={index} className="">
                <Link
                  href={link.path}
                  className={`flex items-center gap-[12px] px-[10px] py-[5px] ${
                    router.asPath === link.path ? "bg-darkPrimary" : ""
                  }`}
                >
                  <span
                    className={`text-[24px]  ${
                      router.asPath === link.path
                        ? "text-primary"
                        : "text-light"
                    }`}
                  >
                    {link.icon}
                  </span>
                  <span
                    className={`font-Montserrat text-[16px] leading-normal  text-white ${
                      router.asPath === link.path ? "font-[700]" : "font-[400]"
                    }`}
                  >
                    {link.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="absolute bottom-10">
            <LogoutBtn handleSignout={handleSignout} />
          </div>
        </aside>
        <main className="col-span-7 h-full overflow-auto bg-[#F6F4F4]">
          {children}
        </main>
      </div>
    </section>
  );
};

export default DashboardLayout;

const LogoutBtn = ({
  handleSignout,
}: {
  handleSignout: () => Promise<void>;
}) => {
  return (
    <button
      className={`flex items-center gap-[12px] px-[10px] py-[5px]`}
      onClick={handleSignout}
    >
      <span className={`text-[24px]}`}>
        <IoIosLogOut color="white" />
      </span>
      <span
        className={`font-Montserrat text-[16px] leading-normal  text-white`}
      >
        Logout
      </span>
    </button>
  );
};

function InvoiceIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M15 7H9M15 11H9M15 15H11M5 3H19V21L17.968 20.116C17.6055 19.8053 17.1439 19.6346 16.6665 19.6346C16.1891 19.6346 15.7275 19.8053 15.365 20.116L14.333 21L13.302 20.116C12.9395 19.8051 12.4776 19.6342 12 19.6342C11.5224 19.6342 11.0605 19.8051 10.698 20.116L9.667 21L8.635 20.116C8.27253 19.8053 7.81088 19.6346 7.3335 19.6346C6.85611 19.6346 6.39447 19.8053 6.032 20.116L5 21V3Z"
        stroke="#BFD5D1"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AnalyticsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM8 17C7.45 17 7 16.55 7 16V13C7 12.45 7.45 12 8 12C8.55 12 9 12.45 9 13V16C9 16.55 8.55 17 8 17ZM12 17C11.45 17 11 16.55 11 16V15C11 14.45 11.45 14 12 14C12.55 14 13 14.45 13 15V16C13 16.55 12.55 17 12 17ZM12 12C11.45 12 11 11.55 11 11C11 10.45 11.45 10 12 10C12.55 10 13 10.45 13 11C13 11.55 12.55 12 12 12ZM16 17C15.45 17 15 16.55 15 16V8C15 7.45 15.45 7 16 7C16.55 7 17 7.45 17 8V16C17 16.55 16.55 17 16 17Z"
        fill="#BFD5D1"
      />
    </svg>
  );
}
function ProfileIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM8 17C7.45 17 7 16.55 7 16V13C7 12.45 7.45 12 8 12C8.55 12 9 12.45 9 13V16C9 16.55 8.55 17 8 17ZM12 17C11.45 17 11 16.55 11 16V15C11 14.45 11.45 14 12 14C12.55 14 13 14.45 13 15V16C13 16.55 12.55 17 12 17ZM12 12C11.45 12 11 11.55 11 11C11 10.45 11.45 10 12 10C12.55 10 13 10.45 13 11C13 11.55 12.55 12 12 12ZM16 17C15.45 17 15 16.55 15 16V8C15 7.45 15.45 7 16 7C16.55 7 17 7.45 17 8V16C17 16.55 16.55 17 16 17Z"
        fill="#BFD5D1"
      />
    </svg>
  );
}
function SettingsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12.0001 15.5C11.0718 15.5 10.1816 15.1313 9.52521 14.4749C8.86883 13.8185 8.50008 12.9283 8.50008 12C8.50008 11.0717 8.86883 10.1815 9.52521 9.52513C10.1816 8.86875 11.0718 8.5 12.0001 8.5C12.9283 8.5 13.8186 8.86875 14.475 9.52513C15.1313 10.1815 15.5001 11.0717 15.5001 12C15.5001 12.9283 15.1313 13.8185 14.475 14.4749C13.8186 15.1313 12.9283 15.5 12.0001 15.5ZM19.4301 12.97C19.4701 12.65 19.5001 12.33 19.5001 12C19.5001 11.67 19.4701 11.34 19.4301 11L21.5401 9.37C21.7301 9.22 21.7801 8.95 21.6601 8.73L19.6601 5.27C19.5401 5.05 19.2701 4.96 19.0501 5.05L16.5601 6.05C16.0401 5.66 15.5001 5.32 14.8701 5.07L14.5001 2.42C14.4798 2.30222 14.4184 2.19543 14.3269 2.11855C14.2354 2.04168 14.1196 1.99968 14.0001 2H10.0001C9.75008 2 9.54008 2.18 9.50008 2.42L9.13008 5.07C8.50008 5.32 7.96008 5.66 7.44008 6.05L4.95008 5.05C4.73008 4.96 4.46008 5.05 4.34008 5.27L2.34008 8.73C2.21008 8.95 2.27008 9.22 2.46008 9.37L4.57008 11C4.53008 11.34 4.50008 11.67 4.50008 12C4.50008 12.33 4.53008 12.65 4.57008 12.97L2.46008 14.63C2.27008 14.78 2.21008 15.05 2.34008 15.27L4.34008 18.73C4.46008 18.95 4.73008 19.03 4.95008 18.95L7.44008 17.94C7.96008 18.34 8.50008 18.68 9.13008 18.93L9.50008 21.58C9.54008 21.82 9.75008 22 10.0001 22H14.0001C14.2501 22 14.4601 21.82 14.5001 21.58L14.8701 18.93C15.5001 18.67 16.0401 18.34 16.5601 17.94L19.0501 18.95C19.2701 19.03 19.5401 18.95 19.6601 18.73L21.6601 15.27C21.7801 15.05 21.7301 14.78 21.5401 14.63L19.4301 12.97Z"
        fill="#BFD5D1"
        fillOpacity="0.7"
      />
    </svg>
  );
}
